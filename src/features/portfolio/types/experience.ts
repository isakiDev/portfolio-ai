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
