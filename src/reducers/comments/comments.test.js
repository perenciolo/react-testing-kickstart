import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

describe('comments reducer', () => {
  it('should handle actions of type SAVE_COMMENT', () => {
    const comment = 'Testing New Comment';

    const action = {
      type: SAVE_COMMENT,
      payload: comment
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual([comment]);
  });

  it('should handle actions with unknown type', () => {
    const newState = commentsReducer([], { type: 'NON_VALID_TYPE' });

    expect(newState).toEqual([]);
  });
});
