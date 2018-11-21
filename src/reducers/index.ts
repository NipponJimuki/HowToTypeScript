// reducers/index.ts
import { combineReducers } from 'redux';
import itemState, { ItemState } from './addItem';

export type Store = {
    itemState: ItemState;
};

const reducers = combineReducers({
    itemState,
});

export default reducers;
