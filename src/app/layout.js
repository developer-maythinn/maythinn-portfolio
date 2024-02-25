import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import "../../public/css/globalStyles.css";

export const metadata = {
  metadataBase: new URL("https://maythinn-portfolio.vercel.app"),

  title: "May Thinn Khine's Portfolio",
  description:
    "May Thinn Khine's Portfolio by react js, next js and material UI.",
  siteName: "May Thinn Khine's Portfolio",

  icons: {
    icon: "/May-Thinn-Khine1.jpg",
  },
  icons: {
    icon: "/May-Thinn-Khine1.jpg",
    shortcut: "/May-Thinn-Khine1.jpg",
    apple: "/May-Thinn-Khine1.jpg",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/May-Thinn-Khine1.jpg",
    },
  },
  openGraph: {
    images: "/May-Thinn-Khine.jpeg",
    title: "May Thinn Khine's Portfolio",
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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="icon" href="/May-Thinn-Khine.jpeg" sizes="any" />
      </head>
      <body className={poppin.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
