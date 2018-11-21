// App.tsx
import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import redcuers from './reducers';
import middlewares from './middlewares';
import { ItemList, AddItem } from './containers';

const store = createStore(redcuers, middlewares);

// DOM出力
ReactDom.render(
    <Provider store={store}>
        <>
            <AddItem />
            <ItemList />
        </>
    </Provider>,
    document.getElementById('content'),
);
