// actions/addItem.ts
import { ADD_ITEM, UPDATE_ITEM } from './actionType';
import { Item } from '../reducers/addItem';

export const addItem = (payload: string) =>
    ({
        type: ADD_ITEM,
        payload,
    } as const);

export const updateItem = (payload: Item[]) =>
    ({
        type: UPDATE_ITEM,
        payload,
    } as const);
