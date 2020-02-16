import React from 'react';
import { hydrate, render } from 'react-dom';
import About from '../pages/AboutPage';

if (window)
  render(
    <About data={window.__DATA__} />,
    document.getElementById('app')
  );
