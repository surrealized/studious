import { useContext } from "react";
import { EditorContext } from "./EditorContext";

export const useEditor = () => {
  return useContext(EditorContext);
};
