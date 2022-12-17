import { Box, Heading } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useEditor } from "../lib/editor/useEditor";

const Editor = dynamic(import("../lib/editor/Editor"), { ssr: false });

export default function Notes() {
  const { editor } = useEditor();
  console.log(editor);
  return (
    <Box>
      <Editor />
    </Box>
  );
}
