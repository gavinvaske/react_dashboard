import { createRoot } from 'react-dom/client';
import App from './App/App'
import React from 'react';
import { getInitialProps  } from './initialize';
import { BrowserRouter } from 'react-router-dom';

const initialProps = getInitialProps();
const app = React.createElement(App, initialProps);

const root = createRoot(document.getElementById('app'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
