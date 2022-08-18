import { STAFFS, DEPARTMENTS,ROLE  } from "../staffs";

export const ADD_NEW_STAFF = 'ADD_NEW_STAFF';

export const initialState = {
   staffs: STAFFS,
   departments: DEPARTMENTS,
   role: ROLE
};

export const Reducer = (state = initialState, action) => {
    return state;
};