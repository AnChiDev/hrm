import * as ActionTypes from './ActionTypes';

export const handleSubmit = (newStaff) => ({
    type: ActionTypes.ADD_NEW_STAFF,
    payload: newStaff
});