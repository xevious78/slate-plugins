/** @jsx jsx */

import * as isHotkey from 'is-hotkey';
import { jsx } from '../../../__test-utils__/jsx';
import { onKeyDownMark } from '../../../common/utils/onKeyDownMark';
import { MARK_BOLD } from '../../../marks/bold/types';
import { MARK_ITALIC } from '../../../marks/italic/types';

const input = (
  <editor>
    <hp>
      t<htext italic>est</htext>
    </hp>
    <selection>
      <anchor path={[0, 1]} offset={0} />
      <focus path={[0, 1]} offset={3} />
    </selection>
  </editor>
) as any;

const event = new KeyboardEvent('keydown');

const output = (
  <editor>
    <hp>
      t<htext bold>est</htext>
    </hp>
    <selection>
      <anchor path={[0, 1]} offset={0} />
      <focus path={[0, 1]} offset={3} />
    </selection>
  </editor>
) as any;

it('should be', () => {
  jest.spyOn(isHotkey, 'default').mockReturnValue(true);

  onKeyDownMark(MARK_BOLD, 'ctrl+b', { clear: MARK_ITALIC })(event, input);
  expect(input.children).toEqual(output.children);
  expect(input.selection).toEqual(output.selection);
});
