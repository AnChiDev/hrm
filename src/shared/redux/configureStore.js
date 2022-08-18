import { legacy_createStore as createStore} from 'redux';
import { Reducer, initialState } from './reducer';
import * as ActionTypes from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer, // reducer
        initialState, // our initialState
    );

    return store;
}

export const addStaff = (newStaff) => ({
    type: ActionTypes.ADD_NEW_STAFF,
    payload: newStaff
});