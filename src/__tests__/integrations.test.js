import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'Root';
import App from 'components/App';

describe('Fetch Comments From jsonplaceholder', () => {
  let wrapped;

  beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response: [
        {
          name: 'Fetched #1'
        },
        {
          name: 'Fetched #2'
        }
      ]
    });

    wrapped = mount(
      <Root>
        <App />
      </Root>
    );
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should be able to fetch a list of comments and display them', done => {
    wrapped.find('.fetch-comments').simulate('click');

    moxios.wait(() => {
      wrapped.update();
      expect(wrapped.find('li').length).toEqual(2);
      done();
      wrapped.unmount();
    });
  });
});
