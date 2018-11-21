// actions/addItem.ts
import { ADD_ITEM, UPDATE_ITEM } from './actionType';
import { ItemProps } from '../reducers/addItem';

export const addItem = (payload: string) => ({
    type: ADD_ITEM as typeof ADD_ITEM,
    payload,
});

export const updateItem = (payload: ItemProps[]) => ({
    type: UPDATE_ITEM as typeof UPDATE_ITEM,
    payload,
});
