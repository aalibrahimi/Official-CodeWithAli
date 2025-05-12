import './[locale]/globals.css';

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
    <html suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  )
}