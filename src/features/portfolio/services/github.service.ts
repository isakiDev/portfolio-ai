import { GITHUB_TOKEN } from "astro:env/server";

import type { GithubRepo, GithubCommit, LatestCommits } from "../types";

const username = "isakidev";
const token = GITHUB_TOKEN;

export async function getLatestCommits(): Promise<LatestCommits[]> {
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=3`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  ).then((res) => res.json() as Promise<GithubRepo[]>);

  if (repos.length === 0) {
    throw new Error("User has no repositories");
  }

  const reposWithCommits = await Promise.all(
    repos.map(async (repo) => {
      const res = await fetch(
        `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=2`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!res.ok) {
        throw new Error(`Failed to fetch commits for ${repo.name}`);
      }

      const commits = (await res.json()) as GithubCommit[];

      return {
        repo: repo.name,
        commits: commits.map((commit) => ({
          message: commit.commit.message,
          date: commit.commit.author.date,
          url: commit.html_url,
        })),
      };
    }),
  );

  return reposWithCommits;
}
