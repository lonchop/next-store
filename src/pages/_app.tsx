import StateWrapper from "@/components/stateWrapper";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "../../styles/globals.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: any) {
  return (
    <StateWrapper>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
      </QueryClientProvider>
    </StateWrapper>
  );
}

export default MyApp;
