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
  status: {
    label: string;
    variant: "primary" | "accent" | "secondary";
  };
  tech: string[];
  url?: string;
  repoUrl?: string;
}
