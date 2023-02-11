import StateWrapper from "@/components/stateWrapper";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ReactQueryDevtoolsPanel } from "react-query/devtools";
import "../../styles/globals.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <StateWrapper>
        <Component {...pageProps} />
      </StateWrapper>
      <ReactQueryDevtools
        initialIsOpen={false}
        position="bottom-left"
        // panelProps={{
        //   style: {
        //     height: "60%",
        //   },
        // }}
      />
      {/* <ReactQueryDevtoolsPanel setIsOpen /> */}
    </QueryClientProvider>
  );
}

export default MyApp;
