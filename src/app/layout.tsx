import './[locale]/globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';

export const metadata = {
  title: 'CodeWithAli',
  description: 'We design, develop and host websites for individual clients aiming to strengthen their online presence. As well as for companies seeking a modern, feature-rich platform to boost business growth.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // suppressHydrationWarning is required — next-themes applies the
    // dark/light class server-to-client via an inline script before
    // hydration. Without the suppressor, React complains about the
    // `class` attribute diff.
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
          // New storage key — the old `theme` key was written to
          // by v1's manual localStorage juggling, so returning
          // visitors would have `light` cached from that bug and
          // next-themes would honor it. Fresh key = fresh default.
          storageKey="cwa-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}