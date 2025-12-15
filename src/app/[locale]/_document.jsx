import { Head, Html, Main, NextScript } from "next/document";

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)
  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }
  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`;

export default function Document() {
  return (
    <Html lang="en" className="h-full antialiased">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />

        {/* Favicon & Icons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tajera",
              url: "https://tajera.net",
              logo: "https://tajera.net/assets/logos/logo.png",
              description:
                "Tajera Software – We provide website and application development services with the highest quality and fastest delivery. We design custom software solutions that help your company grow and achieve its goals at the best cost.",
              sameAs: [
                "https://www.facebook.com/tajera",
                "https://www.linkedin.com/company/tajera",
                "https://x.com/tajera",
                "https://www.instagram.com/tajera",
                "https://github.com/tajera",
                "https://www.tiktok.com/@tajera025",
                "https://youtube.com/@tajera-x5r",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+20-1000447398",
                contactType: "Customer Service",
                areaServed: ["EG", "SA", "AE"],
                availableLanguage: ["Arabic", "English"],
              },
            }),
          }}
        />

        {/* RSS (Optional) */}
        {/* <link rel="alternate" type="application/rss+xml" href="/rss.xml" /> */}
      </Head>
      <body className="flex h-full flex-col bg-white dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
