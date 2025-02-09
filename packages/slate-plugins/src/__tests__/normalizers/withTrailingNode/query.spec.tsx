/** @jsx jsx */

import { Editor } from 'slate';
import { jsx } from '../../../__test-utils__/jsx';
import { withTransforms } from '../../../common/transforms';
import { HeadingType } from '../../../elements/heading';
import { PARAGRAPH } from '../../../elements/paragraph';
import { withTrailingNode } from '../../../normalizers';

const input = (
  <editor>
    <hh1>
      <hp>test</hp>
    </hh1>
    <hh1>
      <hp>test2</hp>
    </hh1>
  </editor>
) as any;

const output = (
  <editor>
    <hh1>
      <hp>test</hp>
    </hh1>
    <hh1>
      <hp>test2</hp>
    </hh1>
  </editor>
) as any;

it('should be', () => {
  const editor = withTrailingNode({
    type: PARAGRAPH,
    level: 0,
    exclude: [HeadingType.H1],
  })(withTransforms()(input as Editor));

  editor.normalizeNode([input, []]);

  expect(input.children).toEqual(output.children);
});
