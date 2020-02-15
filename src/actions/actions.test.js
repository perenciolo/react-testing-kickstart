import { saveComment } from 'actions';
import { SAVE_COMMENT } from './types';

describe('saveComment', () => {
  it('should have the correct type', () => {
    const action = saveComment();

    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('should have the correct payload', () => {
    const payload = 'Testing New Comment';
    const action = saveComment(payload);

    expect(action.payload).toEqual(payload);
  });
});
