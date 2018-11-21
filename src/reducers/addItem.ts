// reducers/addItem.ts
import { Reducer } from 'redux';
import { ADD_ITEM, UPDATE_ITEM } from '../actions/actionType';
import { addItem, updateItem } from '../actions';

type Action = ReturnType<typeof addItem | typeof updateItem>;
export interface ItemProps {
    id: string;
    name: string;
    power: boolean;
}
export type ItemState = {
    items: ItemProps[];
};
const initialState = {
    items: [],
};

const itemState: Reducer<ItemState, Action> = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        id: `item-index-of-${state.items.length}`,
                        name: action.payload,
                        power: false,
                    },
                ],
            };
        case UPDATE_ITEM: {
            return {
                ...state,
                items: action.payload,
            };
        }
        default: {
            const _: never = action;
            return state;
        }
    }
};

export default itemState;
