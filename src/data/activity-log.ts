export type LogLevel = "DEPLOY" | "COMMIT" | "RESEARCH" | "STABLE";

export interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
}

export const activityLog: LogEntry[] = [
  {
    timestamp: "2024-10-26 14:22:01",
    level: "DEPLOY",
    message:
      "Production cluster v2.4.0 successfully rolled out to us-east-1",
  },
  {
    timestamp: "2024-10-25 09:15:44",
    level: "COMMIT",
    message:
      "feat(core): implement zero-copy buffer pooling for high-throughput streams",
  },
  {
    timestamp: "2024-10-24 18:02:12",
    level: "RESEARCH",
    message:
      "Benchmarking eBPF-based observability agents in kernel 6.1",
  },
  {
    timestamp: "2024-10-23 11:30:00",
    level: "STABLE",
    message: "NestJS Boilerplate reached v1.0.0-rc1",
  },
];

export const logLevelColors: Record<LogLevel, string> = {
  DEPLOY: "text-primary",
  COMMIT: "text-tertiary",
  RESEARCH: "text-secondary",
  STABLE: "text-primary",
};
