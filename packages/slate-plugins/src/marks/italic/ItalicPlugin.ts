import { SlatePlugin } from '@udecode/slate-plugins-core';
import { onKeyDownMark } from '../../common/utils/onKeyDownMark';
import { deserializeItalic } from './deserializeItalic';
import { renderLeafItalic } from './renderLeafItalic';
import { ItalicPluginOptions, MARK_ITALIC } from './types';

/**
 * Enables support for italic formatting.
 */
export const ItalicPlugin = (
  options: ItalicPluginOptions = {}
): SlatePlugin => ({
  renderLeaf: renderLeafItalic(options),
  onKeyDown: onKeyDownMark(
    options.typeItalic ?? MARK_ITALIC,
    options.hotkey ?? 'mod+i'
  ),
  deserialize: deserializeItalic(options),
});
