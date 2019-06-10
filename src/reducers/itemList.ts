// reducers/itemList.ts
import { Reducer } from 'redux';
import { CHANGE_POWER_STATE } from '../actions/actionType';
import { changePowerState } from '../actions';

type Action = ReturnType<typeof changePowerState>;
export type PowerState = boolean;
const initialState = false;

const powerState: Reducer<PowerState, Action> = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_POWER_STATE:
            return !state;
        default:
            return state;
    }
};

export default powerState;
