import axios from 'axios';




// The first step


////////////////// Action Types
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

////////////////////// Action Creators

//  1--requst  :
//   means request data from api


export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST
  };
};

// 2--The function will accept a parameter that we call data to fetch data from the Api

// We gave the value of the payload to return us as data

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data
  };
};
// 3-- Here will be the return error message from api

export const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error
  };
};

// Thunk function to fetch data

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest()); // Dispatch the request action

    axios.get('https://fakestoreapi.com/products/1') 
      .then((response) => {
        const data = response.data;
        dispatch(fetchDataSuccess(data)); // Dispatch the success action with the fetched data
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message)); // Dispatch the failure action with the error message
      });
  };
};
