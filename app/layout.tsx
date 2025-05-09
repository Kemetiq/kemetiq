import type React from "react"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import VerticalNav from "@/components/vertical-nav"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata = {
  title: "Kemetiq | AI Automation Agency",
  description:
    "Automate the Ordinary. Amplify the Extraordinary. AI automation solutions tailored to your operations, people, and growth goals.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.className} bg-black text-white antialiased overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <VerticalNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
