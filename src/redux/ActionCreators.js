import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const handleSubmit = (newStaff) => ({
    type: ActionTypes.ADD_NEW_STAFF,
    payload: newStaff
});

export const postStaff = (staffPost) => (dispatch) => {

  return fetch(baseUrl + 'staffs', {
      method: 'POST',
      body: JSON.stringify(staffPost),
      headers: {
          'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
  })
  .then(response => {
      if (response.ok) {
          return response;
      }
      else {
          var error = new Error(`Error ${response.status} : ${response.statusText}`);
          error.response = response;
          throw error;
      }
  },
  error => {
      var errMess = new Error(error.message);
      throw errMess;
  })
  .then(response => response.json())
  .then(response => dispatch(updateStaffs(response)))
  .catch(error => {
      console.log('Post Staff', error.message);
      alert(`Your staff cant be posted Error:${error.message}`)
  })
};


export const fetchStaffs = () => (dispatch) => {
    dispatch(staffsLoading(true));

    return fetch(baseUrl + 'staffs')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(staffs => dispatch(updateStaffs(staffs)))
        .catch(error => dispatch(staffsFailed(error.message)))
}
// edit Staff

export const editStaff = (staffEdit) => (dispatch) => {

  return fetch(baseUrl + 'staffs', {
      method: 'PATCH',
      body: JSON.stringify(staffEdit),
      headers: {
          'Content-Type': 'application/json',
      },
  })
      .then(response => {
          if (response.ok) {
              return response;
          } else {
              var error = new Error(`Error ${response.status}: ${response.statusText}`);
              error.response = response;
              throw error;
          }
      }, error => {
          var errMess = new Error(error.message)
          throw errMess
      }
      )
      .then(response => response.json())
      .then(response => dispatch(updateStaffs(response)))
      .catch(error => {
          console.log('Post Staff', error.message);
          alert(`Your staff cant be edit Error:${error.message}`)
      })
}


// delete Staff
export const deleteStaff = (id) => dispatch => {

  return fetch(baseUrl + `staffs/${id}`, {
      method: 'DELETE',
  })
      .then(response => {
          if (response.ok) {
              return response;
          } else {
              var error = new Error(`Error ${response.status}`);
              error.response = response;
              throw error;
          }
      }, error => {
          var errMess = new Error(error.message);
          throw errMess;
      })
      .then(response => response.json())
      .then(response => dispatch(updateStaffs(response)))
      .catch(error => {
          console.log(error.message)
          alert(error.message)
      })
}

export const staffsLoading = () => ({
    type: ActionTypes.STAFFS_LOADING,
  });
  
  export const staffsFailed = (errmess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errmess,
  });

  
export const updateStaffs = (staffs) => ({
  type: ActionTypes.UPDATE_STAFFS,
  payload: staffs
})

//DEPARTMENT//
export const fetchDepartment = () => (dispatch) => {

  dispatch(departmentsLoading(true));

  return fetch(baseUrl + 'departments')
      .then(response => {
          if (response.ok) {
              return response;
          }
          else {
              var error = new Error(`Error ${response.status} : ${response.statusText}`);
              error.response = response;
              throw error;
          }
      },
      error => {
          var errMess = new Error(error.message);
          throw errMess;
      })
      .then(response => response.json())
      .then(departments => dispatch(addDepartments(departments)))
      .catch(error => dispatch(departmentsFailed(error.message)));
}

export const departmentsLoading = () => ({
  type: ActionTypes.DEPARTMENT_LOADING
});

export const departmentsFailed = (errMess) => ({
  type: ActionTypes.DEPARTMENT_FAILED,
  payload: errMess
})

export const addDepartments = (departments) => ({
  type: ActionTypes.ADD_DEPARTMENT,
  payload: departments
})


  //SALARY//
  export const fetchSalary = () => (dispatch) => {
    dispatch(salaryLoading(true));
  
    return fetch(baseUrl + "staffsSalary")
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          var errmess = new Error(error.message);
          throw errmess;
        }
      )
      .then((response) => response.json())
      .then((salary) => dispatch(addSalary(salary)))
      .catch((error) => dispatch(salaryFailed(error.message)));
  };
  
  export const salaryLoading = () => ({
    type: ActionTypes.SALARY_LOADING,
  });
  
  export const salaryFailed = (errmess) => ({
    type: ActionTypes.SALARY_FAILED,
    payload: errmess,
  });
  
  export const addSalary = (salary) => ({
    type: ActionTypes.ADD_SALARY,
    payload: salary,
  });