/** @jsx jsx */

import * as isHotkey from 'is-hotkey';
import { jsx } from '../../../__test-utils__/jsx';
import { onKeyDownMark } from '../../../common/utils/onKeyDownMark';
import { MARK_BOLD } from '../../../marks/bold/types';

const input = (
  <editor>
    <hp>
      t<anchor />
      est
      <focus />
    </hp>
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

  onKeyDownMark(MARK_BOLD, 'ctrl+b')(event, input);
  expect(input.children).toEqual(output.children);
  expect(input.selection).toEqual(output.selection);
});
