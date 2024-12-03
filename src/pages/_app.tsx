import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";
import { useRouter } from "next/router";
import ContainerLayout from "@/components/layout/ContainerLayout";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();

  const pathsWithContainer = ["/", "/project", "/certificate", "/contact"];

  const isContainerLayout = pathsWithContainer.includes(router.pathname);

  return (
    <QueryClientProvider client={queryClient}>
      <div className={roboto.className}>
        {isContainerLayout ? (
          <ContainerLayout>
            <Component {...pageProps} />
          </ContainerLayout>
        ) : (
          <Component {...pageProps} />
        )}
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
