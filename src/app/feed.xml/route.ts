/**
 * /feed.xml — RSS 2.0 feed for the blog.
 *
 * Regenerated at request time from the static content registry, so
 * there's no build step to keep it in sync.
 */
import { getAllPosts } from "@/content/blog";
import { getCategory } from "@/content/blog/taxonomy";

const SITE = "https://codewithali.com";
const FEED_TITLE = "CodeWithAli — The Studio";
const FEED_DESCRIPTION =
  "Studio notes, playbooks, and engineering writing from the CodeWithAli team.";

function escape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = getAllPosts();
  const now = new Date().toUTCString();

  const items = posts
    .map((p) => {
      const url = `${SITE}/blog/${p.slug}`;
      const pubDate = new Date(p.date).toUTCString();
      const category = getCategory(p.category);
      return [
        "<item>",
        `<title>${escape(p.title)}</title>`,
        `<link>${url}</link>`,
        `<guid isPermaLink="true">${url}</guid>`,
        `<pubDate>${pubDate}</pubDate>`,
        `<category>${escape(category.name)}</category>`,
        `<description>${escape(p.excerpt)}</description>`,
        `<author>hello@codewithali.com (${escape(p.author.name)})</author>`,
        "</item>",
      ].join("");
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(FEED_TITLE)}</title>
    <link>${SITE}/blog</link>
    <description>${escape(FEED_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
