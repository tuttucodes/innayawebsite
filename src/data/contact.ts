export const TOPICS = [
  "Investment",
  "Distribution / Retail",
  "Partnership",
  "Export",
  "Press",
  "Careers",
  "Other",
] as const;

export type Topic = (typeof TOPICS)[number];

/** Narrow an untrusted query-string value to a known contact topic. */
export function toTopic(raw: string | string[] | undefined): Topic | undefined {
  const value = Array.isArray(raw) ? raw[0] : raw;
  return TOPICS.find((t) => t === value);
}
