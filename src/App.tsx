// App.tsx
import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import redcuers from './reducers';
import { ItemList } from './containers';

const store = createStore(redcuers);

ReactDom.render(
    <Provider store={store}>
        <ItemList />
    </Provider>,
    document.getElementById('content'),
);
