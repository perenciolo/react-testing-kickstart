import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveComment } from 'actions';

// import { Container } from './styles';

export default function CommentBox() {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');

  function handleChange(e) {
    setComment(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // @TODO - dispatch create comment action
    dispatch(saveComment(comment));

    setComment('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add Comment</h4>
      <textarea
        cols="30"
        rows="10"
        value={comment}
        onChange={handleChange}
      ></textarea>
      <div>
        <button type="submit">Submit Comment</button>
      </div>
    </form>
  );
}
