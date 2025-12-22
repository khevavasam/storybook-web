import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Providers } from '@/providers/Providers'

const COLOR_MODE_INIT = `(function () {
  try {
    var key = 'chakra-color-mode';
    // FORCE default to dark on every load (no auto-switch to light)
    var mode = 'dark';
    document.documentElement.dataset.colorMode = mode;
    document.documentElement.style.colorScheme = mode;
    try { localStorage.setItem(key, mode); } catch (e) {}
    document.cookie = key + '=' + mode + '; Path=/; Max-Age=31536000; SameSite=Lax';
  } catch (e) {}
})();`

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'storybook-web',
  description: 'Multilingual kids stories (FI/EN/SV)',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-color-mode="dark"
      style={{ colorScheme: 'dark' }}
    >
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Set initial color mode BEFORE hydration */}
        <Script
          id="color-mode-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: COLOR_MODE_INIT }}
        />
        {/* Vanta BIRDS (CDN) */}
        <Script
          id="three-r121"
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
          strategy="beforeInteractive"
        />
        <Script
          id="vanta-birds"
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"
          strategy="beforeInteractive"
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
