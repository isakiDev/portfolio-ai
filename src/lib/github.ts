const username = "isakidev";

interface GithubRepo {
  name: string;
}

interface GithubCommit {
  commit: {
    message: string;
    author: {
      date: string;
    };
  };
  html_url: string;
}

interface LatestCommits {
  repo: string;
  commits: {
    message: string;
    date: string;
    url: string;
  }[];
}

const token = import.meta.env.GITHUB_TOKEN;

export async function getLatestCommits(): Promise<LatestCommits> {
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=1`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  ).then((res) => res.json() as Promise<GithubRepo[]>);

  const repo = repos[0];

  if (!repo) {
    throw new Error("No repositories found");
  }

  const commits = await fetch(
    `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=5`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  ).then((res) => res.json() as Promise<GithubCommit[]>);

  return {
    repo: repo.name,
    commits: commits.map((commit) => ({
      message: commit.commit.message,
      date: commit.commit.author.date,
      url: commit.html_url,
    })),
  };
}
