import React from 'react';
import {render} from '@testing-library/react';

import App from './App';

const rootRender = () => {

  const {getByText} = render(<App />);
  const element = getByText(/0/i);

  expect(element).toBeInTheDocument();
}

test('root render', rootRender);
