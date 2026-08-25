export interface ExperienceEntry {
  period: string;
  company: string;
  role: string;
  tag: string;
  tagVariant: "primary" | "secondary";
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
  image: string;
  tech: string[];
  url?: string;
  repoUrl?: string;
}
