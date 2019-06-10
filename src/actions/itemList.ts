// actions/itemList.ts
import { CHANGE_POWER_STATE } from './actionType';

export const changePowerState = () =>
    ({
        type: CHANGE_POWER_STATE,
    } as const);
