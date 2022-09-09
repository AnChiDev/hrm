import { legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import { Staffs } from './staffs';
import { Departments } from './departments';
import { Salary } from './salary';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            staffs: Staffs,
            department: Departments,
            salary: Salary
        }),
       applyMiddleware(thunk, logger)
    );

    return store;
}