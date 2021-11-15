import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import Theme from './assets/styles/theme';
import reportWebVitals from './reportWebVitals';

render(
    <Theme>
        <App />
    </Theme>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
