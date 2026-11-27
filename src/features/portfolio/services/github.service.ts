import { GITHUB_TOKEN } from "astro:env/server";

import { site } from "@/config/site";
import type { GithubCommit, GithubRepo, LatestCommits } from "../types/github";

const GITHUB_USERNAME = site.socials.github.username;
const REPOS_LIMIT = 3;
const COMMITS_LIMIT = 2;

export async function getLatestCommits(): Promise<LatestCommits[]> {
  try {
    const reposResponse = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=${REPOS_LIMIT}`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      },
    );

    if (!reposResponse.ok) {
      return [];
    }

    const repos = (await reposResponse.json()) as GithubRepo[];

    const reposWithCommits = await Promise.all(
      repos.map(async (repo) => {
        const response = await fetch(
          `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/commits?per_page=${COMMITS_LIMIT}`,
          {
            headers: {
              Authorization: `Bearer ${GITHUB_TOKEN}`,
            },
          },
        );

        if (!response.ok) {
          return null;
        }

        const commits = (await response.json()) as GithubCommit[];

        return {
          repo: repo.name,
          commits: commits.map((commit) => ({
            message: commit.commit.message,
            date: commit.commit.author.date,
            url: commit.html_url,
          })),
        } satisfies LatestCommits;
      }),
    );

    return reposWithCommits.filter(
      (entry): entry is LatestCommits => entry !== null,
    );
  } catch {
    return [];
  }
}
