import EditorJS from "@editorjs/editorjs";
import { ReactNode, useRef, useState } from "react";
import { EditorContext } from "./EditorContext";

export const EditorProvider = ({ children }: { children: ReactNode }) => {
  const [editor, setEditor] = useState<EditorJS | null>(null);

  return (
    <EditorContext.Provider value={{ editor, setEditor }}>
      {children}
    </EditorContext.Provider>
  );
};
