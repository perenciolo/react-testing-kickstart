import React from 'react';
import { useSelector } from 'react-redux';

// import { Container } from './styles';

export default function CommentList() {
  const comments = useSelector(state => state.comments);

  function renderComments() {
    if (!comments) return null;

    return comments.map((comment, i) => <li key={String(i)}>{comment}</li>);
  }

  return (
    <div>
      <h4>Comment List</h4>
      <ul>{renderComments()}</ul>
    </div>
  );
}
