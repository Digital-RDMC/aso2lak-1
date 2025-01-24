

import type { Metadata } from 'next';
import { Toaster } from 'sonner';

import { ThemeProvider } from '@/components/theme-provider';
// import i18n from "@/i18n";
// import { useLanguageStore } from "@/stores/languageStore";
// import { useTranslation } from "react-i18next";
// import { useEffect, useState } from "react";
// import { Roboto, Cairo } from "next/font/google";
import './globals.css';

// const roboto = Roboto({
//     subsets: ["latin"], // Add subsets as required
//     weight: ["400", "700"], // Specify font weights
//     variable: "--font-roboto", // Add a custom CSS variable
//   });
  
//   const cairo = Cairo({
//     subsets: ["arabic"], // Add the Arabic subset
//     weight: ["400", "700"], // Specify font weights (e.g., regular and bold)
//     variable: "--font-cairo", // Use a custom CSS variable for the font
//   });
  

export const metadata: Metadata = {
  metadataBase: new URL('https://chat.vercel.ai'),
  title: 'Next.js Chatbot Template',
  description: 'Next.js chatbot template using the AI SDK.',
};

export const viewport = {
  maximumScale: 1, // Disable auto-zoom on mobile Safari
};

const LIGHT_THEME_COLOR = 'hsl(0 0% 100%)';
const DARK_THEME_COLOR = 'hsl(240deg 10% 3.92%)';
const THEME_COLOR_SCRIPT = `\
(function() {
  var html = document.documentElement;
  var meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'theme-color');
    document.head.appendChild(meta);
  }
  function updateThemeColor() {
    var isDark = html.classList.contains('dark');
    meta.setAttribute('content', isDark ? '${DARK_THEME_COLOR}' : '${LIGHT_THEME_COLOR}');
  }
  var observer = new MutationObserver(updateThemeColor);
  observer.observe(html, { attributes: true, attributeFilter: ['class'] });
  updateThemeColor();
})();`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  // const [lang, setLang] = useState("en");
  // const { language, setLanguage } = useLanguageStore();

  // const { ready } = useTranslation();

  // useEffect(() => {
  //   // Get saved language from localStorage or fallback to browser language
  //   const savedLanguage =  navigator.language.split("-")[0] || "en";
  //   const validLanguage = ["en", "fr", "ar"].includes(savedLanguage)
  //     ? savedLanguage
  //     : "ar";
  //   setLanguage(validLanguage);

  //   // Change language in i18n
  //   i18n
  //     .changeLanguage(validLanguage)
  //     .catch((err: Error) => console.error("Error changing language:", err));

  //   // Set direction based on language
  //   document.documentElement.lang = validLanguage;
  //   document.documentElement.dir = validLanguage === "ar" ? "rtl" : "ltr";
  //   setLang(validLanguage);

  // }, [language, setLanguage, ready]);


   


  return (
    <html
    // lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}
      // `next-themes` injects an extra classname to the body element to avoid
      // visual flicker before hydration. Hence the `suppressHydrationWarning`
      // prop is necessary to avoid the React hydration mismatch warning.
      // https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: THEME_COLOR_SCRIPT,
          }}
        />
      </head>
      <body 
      // className={
      //     lang === "ar"
      //       ? ` ${cairo.variable} antialiased arabicFont bg-slate-100`
      //       : ` ${roboto.variable} antialiased LatinFont bg-slate-100`
      //   }
        
        >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-center" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
