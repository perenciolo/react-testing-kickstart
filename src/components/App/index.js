import React from 'react';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// import { Container } from './styles';

export default function App() {
  return (
    <div>
      <CommentBox />
      <CommentList />
    </div>
  );
}
