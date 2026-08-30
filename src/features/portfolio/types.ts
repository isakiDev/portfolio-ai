export interface ExperienceEntry {
  period: string;
  company: string;
  role: string;
  description: string;
  highlights: string[];
  dotColor?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface ProjectEntry {
  title: string;
  description: string;
  imageUrl: string;
  tech: string[];
  deployUrl?: string;
  repoUrl?: string;
}

// Now Playing
export interface InputAccessToken {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
}

export interface NowPlayingResponse {
  is_playing: boolean;
  item: {
    name: string;
    album: {
      images: { url: string }[];
    };
    artists: { name: string }[];
  };
}

// GitHub
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
