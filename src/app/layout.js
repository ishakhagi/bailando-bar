import { Epilogue, Roboto } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--body-color-font",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--heading-font",
});

export const metadata = {
  title: {
    absolute: "",
    default: "Bailando - Mexikan Bar & Kitchen",
    template: "%s | Bailando - Mexikan Bar & Kitchen",
  },
  description:
    "Erleben Sie authentische mexikanische Küche im Bailando - Mexikan Bar & Kitchen. Genießen Sie köstliche Tacos, Burritos, erfrischende Cocktails und eine lebendige Atmosphäre. Ihr Ziel für mexikanisches Essen und Drinks!",
  keywords: [
    "mexikanisches Restaurant",
    "Cocktail Bar",
    "Tacos",
    "Burritos",
    "mexikanische Küche",
    "Bailando",
    "Bar",
    "Kitchen",
  ],
  authors: [{ name: "Bailando Team" }],
  creator: "Bailando - Mexikan Bar & Kitchen",
  publisher: "Bailando - Mexikan Bar & Kitchen",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: "Bailando - Mexikan Bar & Kitchen",
    description:
      "Erleben Sie authentische mexikanische Küche im Bailando - Mexikan Bar & Kitchen. Genießen Sie köstliche Tacos, Burritos, erfrischende Cocktails und eine lebendige Atmosphäre.",
    siteName: "Bailando - Mexikan Bar & Kitchen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bailando - Mexikan Bar & Kitchen",
    description:
      "Erleben Sie authentische mexikanische Küche im Bailando - Mexikan Bar & Kitchen. Genießen Sie köstliche Tacos, Burritos, erfrischende Cocktails und eine lebendige Atmosphäre.",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.png",
        color: "#000000",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <meta name="author" content="Bailando Team" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
      <body className={`${epilogue.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
