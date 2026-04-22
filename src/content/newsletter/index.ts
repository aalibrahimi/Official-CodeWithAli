import type { NewsletterIssue } from "@/lib/blog/types";
import issue001 from "./issues/001-opening-doors";

const REGISTRY: NewsletterIssue[] = [issue001];

export function getAllIssues(): NewsletterIssue[] {
  return [...REGISTRY].sort((a, b) => b.issue - a.issue);
}

export function getIssueBySlug(slug: string): NewsletterIssue | undefined {
  return REGISTRY.find((i) => i.slug === slug);
}

export function getLatestIssue(): NewsletterIssue | undefined {
  return getAllIssues()[0];
}
