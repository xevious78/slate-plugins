import { castArray } from 'lodash';
import { Editor, Range } from 'slate';
import { getRangeFromBlockStart } from '../../common/queries';
import { getText } from '../../common/queries/getText';
import { isCollapsed } from '../../common/queries/isCollapsed';
import { autoformatBlock } from './transforms/autoformatBlock';
import { autoformatInline } from './transforms/autoformatInline';
import { autoformatInlineBlock } from './transforms/autoformatInlineBlock';
import { WithAutoformatOptions } from './types';

/**
 * Enables support for autoformatting actions.
 * Once a markup rule is validated, it does not check the following rules.
 */
export const withAutoformat = ({ rules }: WithAutoformatOptions) => <
  T extends Editor
>(
  editor: T
) => {
  const { insertText } = editor;

  editor.insertText = (text) => {
    if (!isCollapsed(editor.selection)) return insertText(text);

    for (const {
      trigger = ' ',
      type,
      markup,
      preFormat,
      format,
      mode,
      between,
      ignoreTrim,
      insertTrigger,
    } of rules) {
      const triggers: string[] = castArray(trigger);

      // Check trigger
      if (!triggers.includes(text)) continue;

      const markups: string[] = castArray(markup);

      const rangeFromBlockStart = getRangeFromBlockStart(editor) as Range;
      const textFromBlockStart = getText(editor, rangeFromBlockStart);

      const valid = () => insertTrigger && insertText(text);

      if (markups.includes(textFromBlockStart)) {
        // Start of the block
        autoformatBlock(editor, type, rangeFromBlockStart, {
          preFormat,
          format,
        });
        return valid();
      }

      if (mode === 'inline-block') {
        if (
          autoformatInlineBlock(editor, { preFormat, markup, format, type })
        ) {
          return valid();
        }
      }

      if (mode === 'inline') {
        if (
          autoformatInline(editor, {
            type,
            between,
            ignoreTrim,
            markup: Array.isArray(markup) ? markup[0] : markup,
          })
        ) {
          return valid();
        }
      }
    }

    insertText(text);
  };

  return editor;
};
