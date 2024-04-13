import "@/styles/globals.css";
import Theme from "@/styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { MuseoModerno } from "next/font/google";

const museoModerno = MuseoModerno({
  subsets: ["latin"], // 또는 preload: false
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Theme>
        <main className={museoModerno.className}>
          <Component {...pageProps} />
        </main>
      </Theme>
    </QueryClientProvider>
  );
}
