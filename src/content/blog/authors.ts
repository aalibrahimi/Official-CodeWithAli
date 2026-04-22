import type { Author } from "@/lib/blog/types";

export const AUTHORS: Record<string, Author> = {
  ali: {
    id: "ali",
    name: "Ali Alibrahimi",
    role: "Founder, CodeWithAli",
    bio: "Builds agencies the way good software is built — iteratively, and with a bias for action. Writes about what we ship and why.",
    avatar: "/codewithali.png",
    socials: {
      twitter: "https://twitter.com/codewithali",
      linkedin: "https://linkedin.com/in/alialibrahimi",
      github: "https://github.com/codewithali",
      website: "https://codewithali.com",
    },
  },
  team: {
    id: "team",
    name: "The CodeWithAli Team",
    role: "Studio",
    bio: "Short dispatches written jointly by our design + engineering team about how we work and what we care about.",
    avatar: "/codewithali.png",
  },
};

export function getAuthor(id: string): Author {
  return AUTHORS[id] ?? AUTHORS.team;
}
