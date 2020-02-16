import React from 'react';
import { hydrate, render } from 'react-dom';
import Work from '../pages/WorkPage';

if (window)
  render(
    <Work data={window.__DATA__} />,
    document.getElementById('app')
  );
