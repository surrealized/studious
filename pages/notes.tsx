import { Box, Heading } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Editor = dynamic(import("../lib/editor/Editor"), { ssr: false });

export default function Notes() {
  return (
    <Box>
      <Editor />
    </Box>
  );
}
