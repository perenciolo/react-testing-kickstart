import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Link } from 'react-router-dom';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { changeAuth } from 'actions';

// import { Container } from './styles';

export default function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  function renderButton() {
    return (
      (auth && (
        <button onClick={() => dispatch(changeAuth(false))}>Sign Out</button>
      )) ||
      (!auth && (
        <button onClick={() => dispatch(changeAuth(true))}>Sign In</button>
      ))
    );
  }

  function renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a comment</Link>
        </li>
        <li>{renderButton()}</li>
      </ul>
    );
  }
  return (
    <div>
      {renderHeader()}
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  );
}
