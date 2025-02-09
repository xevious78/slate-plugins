import { SlatePlugin } from '@udecode/slate-plugins-core';
import { onKeyDownMark } from '../../common/utils/onKeyDownMark';
import { deserializeBold } from './deserializeBold';
import { renderLeafBold } from './renderLeafBold';
import { BoldPluginOptions, MARK_BOLD } from './types';

/**
 * Enables support for bold formatting
 */
export const BoldPlugin = (options: BoldPluginOptions = {}): SlatePlugin => ({
  renderLeaf: renderLeafBold(options),
  deserialize: deserializeBold(options),
  onKeyDown: onKeyDownMark(
    options.typeBold ?? MARK_BOLD,
    options.hotkey ?? 'mod+b'
  ),
});
