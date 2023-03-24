import { createRoot } from 'react-dom/client';
import App from './App/App'
import React from 'react';
import { getInitialProps  } from './initialize';

const initialProps = getInitialProps();
const app = React.createElement(App, initialProps);

const root = createRoot(document.getElementById('app'));

root.render(app);
