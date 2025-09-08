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
  description: "Bailando - Mexikan Bar & Kitchen",
  openGraph: {
    title: "Bailando - Mexikan Bar & Kitchen",
    description: "Bailando - Mexikan Bar & Kitchen",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={`${epilogue.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
