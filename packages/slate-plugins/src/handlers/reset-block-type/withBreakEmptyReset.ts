import { Editor, Transforms } from 'slate';
import { getBlockAbove, isBlockTextEmpty } from '../../common/queries';
import { DEFAULT_ELEMENT } from '../../common/types/node.types';
import { WithResetBlockTypeOptions } from './types';

/**
 * When inserting break at the start of an empty block, reset the block type to a default type.
 */
export const withBreakEmptyReset = ({
  types,
  defaultType = DEFAULT_ELEMENT,
  onUnwrap,
}: WithResetBlockTypeOptions) => <T extends Editor>(editor: T) => {
  const { insertBreak } = editor;

  editor.insertBreak = () => {
    const blockEntry = getBlockAbove(editor);

    const [block] = blockEntry;

    if (isBlockTextEmpty(block)) {
      const parent = Editor.above(editor, {
        match: (n) => types.includes(n.type as string),
      });

      if (parent) {
        Transforms.setNodes(editor, { type: defaultType });

        onUnwrap?.();

        return;
      }
    }

    insertBreak();
  };

  return editor;
};
