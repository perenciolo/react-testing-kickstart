import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'actions/types';
import axios from 'axios';

export const saveComment = comment => ({
  type: SAVE_COMMENT,
  payload: comment
});

export const fetchComments = () => {
  const payload = axios.get('https://jsonplaceholder.typicode.com/comments');
  return {
    type: FETCH_COMMENTS,
    payload
  };
};

export const changeAuth = isLogin => ({
  type: CHANGE_AUTH,
  payload: isLogin
});
