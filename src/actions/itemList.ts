// actions/itemList.ts
import { CHANGE_POWER_STATE } from './actionType';

export const changePowerState = (payload: number) =>
    ({
        type: CHANGE_POWER_STATE,
        payload,
    } as const);
