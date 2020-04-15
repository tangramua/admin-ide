import { Dispatch } from 'redux';
import { Store } from '../../interfaces';
import { StatePersistService } from '../../utils';


export function saveStoreState(): any {
    return (dispatch: Dispatch<any>, getState: () => any) => {
        StatePersistService.saveState(getState());
    };
}

export function clearSavedStoreState(): any {
    return (dispatch: Dispatch<any>, getState: () => any) => {
        StatePersistService.clearState();
    };
}
