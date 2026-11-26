export interface GithubRepo {
  name: string;
}

export interface GithubCommit {
  commit: {
    message: string;
    author: {
      date: string;
    };
  };
  html_url: string;
}

export interface LatestCommits {
  repo: string;
  commits: {
    message: string;
    date: string;
    url: string;
  }[];
}
