import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import "../../public/css/globalStyles.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://maythinn-portfolio.vercel.app"),

  title: "May Thinn Khine Portfolio",
  description:
    "May Thinn Khine Portfolio by react js, next js and material UI.",
  siteName: "May Thinn Khine Portfolio",

  icons: {
    icon: "/images/May-Thinn-Khine.jpeg",
    shortcut: "/images/May-Thinn-Khine.jpeg",
    apple: "/images/May-Thinn-Khine.jpeg",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/images/May-Thinn-Khine.jpeg",
    },
  },
  openGraph: {
    images: "/images/May-Thinn-Khine.jpeg",
    title: "May Thinn Khine Portfolio",
    description: "Senior Frontend Developer",
    url: "https://maythinn-portfolio.vercel.app",
    locale: "en_US",
    type: "website",
  },
};
import { Inter } from "next/font/google";
import { Poppins, Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
const poppin = Poppins({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-G4NP047WFZ"></Script>
      <Script>
      {` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-G4NP047WFZ');`}
      </Script>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body className={poppin.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
