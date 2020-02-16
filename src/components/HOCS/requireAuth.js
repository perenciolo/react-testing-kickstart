import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default ChildComponent => {
  function ComposedComponent(props) {
    const auth = useSelector(state => state.auth);

    useEffect(() => {
      if (!auth) {
        props.history.push('/');
      }
    }, [auth, props.history]);

    return <ChildComponent {...props} />;
  }

  return ComposedComponent;
};
