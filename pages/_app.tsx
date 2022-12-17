import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { extendTheme } from "@chakra-ui/react";
import { EditorProvider } from "../lib/editor/EditorProvider";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <EditorProvider>
        <Component {...pageProps} />
      </EditorProvider>
    </ChakraProvider>
  );
}

export default MyApp;
