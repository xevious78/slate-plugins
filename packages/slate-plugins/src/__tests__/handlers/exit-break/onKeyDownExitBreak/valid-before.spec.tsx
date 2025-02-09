/** @jsx jsx */

import * as isHotkey from 'is-hotkey';
import { jsx } from '../../../../__test-utils__/jsx';
import { onKeyDownExitBreak } from '../../../../handlers/exit-break';

const input = (
  <editor>
    <hp>
      te
      <cursor />
      st
    </hp>
  </editor>
) as any;

const event = new KeyboardEvent('keydown');

const output = (
  <editor>
    <hp>
      <htext />
      <cursor />
    </hp>
    <hp>test</hp>
  </editor>
) as any;

it('should be', () => {
  jest.spyOn(isHotkey, 'default').mockReturnValue(true);
  onKeyDownExitBreak({
    rules: [{ hotkey: 'mod+enter', level: 0, before: true }],
  })(event, input);
  expect(input.children).toEqual(output.children);
  expect(input.selection?.anchor).toEqual({ offset: 0, path: [0, 0] });
});
