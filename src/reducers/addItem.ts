// reducers/addItem.ts
import { Reducer } from 'redux';
import { ADD_ITEM, UPDATE_ITEM } from '../actions/actionType';
import { addItem, updateItem } from '../actions';

type Action = ReturnType<typeof addItem | typeof updateItem>;
export interface Item {
    id: string;
    name: string;
    power: boolean;
}
export type ItemState = Item[];

const initialState: ItemState = [];

const itemState: Reducer<ItemState, Action> = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [
                ...state,
                {
                    id: `${Math.random()}`,
                    name: action.payload,
                    power: false,
                },
            ];
        case UPDATE_ITEM: {
            return action.payload;
        }
        default: {
            const _: never = action;
            return state;
        }
    }
};

export default itemState;
