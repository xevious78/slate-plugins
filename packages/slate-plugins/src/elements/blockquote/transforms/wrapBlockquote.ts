import { Editor } from "slate";
import { wrapNodes } from "../../../common/transforms/wrapNodes";
import { PARAGRAPH } from "../../paragraph";

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
