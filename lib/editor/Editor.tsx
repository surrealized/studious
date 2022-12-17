import EditorJS from "@editorjs/editorjs";
// @ts-ignore
import Header from "@editorjs/header";
// @ts-ignore
import Paragraph from "@editorjs/paragraph";
import { Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useEditor } from "./useEditor";

export let editor: EditorJS | null = null;

const Editor = () => {
  const { setEditor } = useEditor();
  const [mounted, setMounted] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (!ref.current) return;
    if (editorRef.current) return;

    editorRef.current = new EditorJS({
      holder: ref.current,
      tools: {
        header: Header,
        paragraph: Paragraph,
      },
    });

    setEditor(editorRef.current);

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
      }
    };
  }, [mounted, setEditor]);

  return <Box ref={ref} />;
};

export default Editor;
