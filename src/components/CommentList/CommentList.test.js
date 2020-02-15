import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentList from 'components/CommentList';

describe('CommentList Component', () => {
  let wrapped;
  const INITIAL_STATE = { comments: ['Comment 1', 'Comment 2'] };

  beforeEach(() => {
    wrapped = mount(
      <Root initialState={INITIAL_STATE}>
        <CommentList />
      </Root>
    );
  });

  it('should create one `li` per comment', () => {
    expect(wrapped.find('li').length).toEqual(INITIAL_STATE.comments.length);
  });

  it('should show the text for each comment', () => {
    expect(wrapped.render().text()).toContain(INITIAL_STATE.comments[0]);
    expect(wrapped.render().text()).toContain(INITIAL_STATE.comments[1]);
  });
});
