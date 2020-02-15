import React, { useState } from 'react';

// import { Container } from './styles';

export default function CommentBox() {
  const [comment, setComment] = useState('');

  function handleChange(e) {
    setComment(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // @TODO - dispatch create comment action

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
