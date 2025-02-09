import { SlatePlugin } from '@udecode/slate-plugins-core';
import { deserializeActionItem } from './deserializeActionItem';
import { renderElementActionItem } from './renderElementActionItem';
import { ActionItemPluginOptions } from './types';

export const ActionItemPlugin = (
  options?: ActionItemPluginOptions
): SlatePlugin => ({
  renderElement: renderElementActionItem(options),
  deserialize: deserializeActionItem(options),
});
