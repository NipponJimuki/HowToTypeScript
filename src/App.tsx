import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(() => {});

// DOM出力
ReactDom.render(
    <Provider store={store}>
        <div>Text</div>
    </Provider>,
    document.getElementById('content'),
);
