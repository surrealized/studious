import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import { Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

// import { createReactEditorJS } from "react-editor-js";

// const Editor = createReactEditorJS();

// export default Editor;

const Editor = () => {
  const [mounted, setMounted] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const editorRef = useRef<EditorJS | null>(null);

  const holder = ref.current;
  const editor = editorRef.current;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (!holder) return;

    editorRef.current = new EditorJS({
      holder,
      tools: {
        header: Header,
        paragraph: Paragraph,
      },
    });

    return () => {
      if (editor) {
        editor.destroy();
      }
    };
  }, [mounted, holder, editor]);

  return <Box ref={ref} />;
};

export default Editor;
