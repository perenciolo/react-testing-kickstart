import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('should have a textarea and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toBeTruthy();
});

describe('the text area', () => {
  const value = 'new Comment';

  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: {
        value
      }
    });

    wrapped.update();
  });

  it('should allow users to type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual(value);
  });

  it('should be empty after submitting the form', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
