import type { AppProps } from "next/app";
import GlobalStyle from "../styles/global";
import { Raleway, Montserrat } from "next/font/google";

const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--Raleway",
});
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--Montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${raleway.variable} ${montserrat.variable}`}>
      <GlobalStyle />
      <Component {...pageProps} />
    </main>
  );
}
