import { Editor, Transforms, Path, NodeEntry, Ancestor } from "slate";

export const onKeyDownBlockquote = () => (e: KeyboardEvent, editor: Editor) => {
  if (e.key == "Backspace") {
    const [paragraphNode, paragraphPath] = Editor.parent(
      editor,
      editor.selection!
    );

    // Verify that the current node is p
    if (paragraphNode.type !== "p") return;

    // Verify that the parent node is a blockquote
    const [blockquoteItemNode, blockquoteItemPath] = Editor.parent(
      editor,
      paragraphPath
    );
    if (blockquoteItemNode.type !== "blockquote") return;

    // Check selection is at zero
    if (editor.selection?.anchor.offset == 0) {
      // If it is the first child of the blockquote: then unwrap the bloquote
      if (paragraphPath[paragraphPath.length - 1] == 0) {
        e.preventDefault();

        Transforms.unwrapNodes(editor, { at: blockquoteItemPath });
      }
    }
  }
};
