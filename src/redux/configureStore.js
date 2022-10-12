import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { Staffs } from './Staffs';
import { Departments } from './Departments';
import { StaffsSalary } from './Salary';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			staffs: Staffs,
			departments: Departments,
			staffsSalary: StaffsSalary,
		}),
		applyMiddleware(thunk, logger)
	);

	return store;
};
