// reducers/index.ts
import { combineReducers } from 'redux';
import powerState, { PowerState } from './itemList';

export type Store = {
    powerState: PowerState;
};

const reducers = combineReducers({
    powerState,
});

export default reducers;
