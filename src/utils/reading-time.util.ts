const WORDS_PER_MINUTE = 200;

export function calculateReadingTime(content: string): number {
  const textWithoutCode = content.replace(/```[\s\S]*?```/g, '');

  const words = textWithoutCode.trim().split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;

  const minutes = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));

  return minutes;
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min de lectura`;
}

export function getReadingTime(content: string): string {
  const minutes = calculateReadingTime(content);
  return formatReadingTime(minutes);
}