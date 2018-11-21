// middlewares/itemList.js
import { MiddlewareAPI, Dispatch } from 'redux';
import { CHANGE_POWER_STATE } from '../actions/actionType';
import { changePowerState as changePowerStateAction, updateItem } from '../actions';
import { Store } from '../reducers';

type Action = ReturnType<typeof changePowerStateAction>;

const changePowerState = (store: MiddlewareAPI<Dispatch, Store>) => (next: Dispatch) => (
    action: Action,
) => {
    switch (action.type) {
        case CHANGE_POWER_STATE: {
            const { items } = store.getState().itemState;
            const changedPowerItems = items.map((item, index) =>
                index === action.payload ? { ...item, power: !item.power } : item,
            );
            next(updateItem(changedPowerItems));
            break;
        }
        default:
            next(action);
    }
};

export default changePowerState;
