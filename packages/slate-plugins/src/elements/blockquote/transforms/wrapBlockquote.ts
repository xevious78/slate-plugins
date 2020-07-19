import { Editor } from "slate";
import { wrapNodes } from "../../../common/transforms/wrapNodes";

export const wrapBlockquote = (
  editor: Editor,
  {
    typeBlockquote,
  }: {
    typeBlockquote: string;
  }
) => {
  if (!editor.selection) return;

  const blockquote = { type: typeBlockquote, children: [] };
  wrapNodes(editor, blockquote);
};
