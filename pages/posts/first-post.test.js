import React from 'react';
import ReactDOM from 'react-dom';
import FirstPost from './first-post';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FirstPost />, div);

  expect(div.innerHTML).toContain("First Post");

  ReactDOM.unmountComponentAtNode(div);
})
