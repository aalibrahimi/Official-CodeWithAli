import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  // Skip ESLint during `next build` so a stylistic issue (unescaped
  // apostrophe in JSX, unused import left during a refactor) doesn't
  // fail the Vercel deploy. Lint still runs in dev and via
  // `bun run lint` on demand, so it's not a silent regression — we
  // just stop letting it block ship. TypeScript still enforced; any
  // real type error fails the build.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
