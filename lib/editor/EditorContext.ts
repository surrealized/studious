import EditorJS from "@editorjs/editorjs";

import { createContext, RefObject } from "react";

export interface EditorContextValues {
  editor: EditorJS | null;
  setEditor: (editor: EditorJS) => void;
}

export const EditorContext = createContext<EditorContextValues>(
  {} as EditorContextValues
);
