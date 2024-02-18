import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import "../../public/css/globalStyles.css";

export const metadata = {
  title: "May Thinn Khine's Portfolio",
  description: "May Thinn Khine's Portfolio",
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
      </head>
      <body className={poppin.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
