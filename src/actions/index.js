import axios from 'axios';
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR = "SET_ERROR";



export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch(fetchStart());
        axios.get('http://localhost:3333/smurfs/')
        .then(res => {
            dispatch(fetchSuccess(res.data))
        })
        .catch(err => {
            dispatch(fetchFail(err));
        });
    }
}

export const fetchStart = () => {
    return {type: FETCH_START}
}

export const fetchSuccess = (smurf) => {
    return {type: FETCH_SUCCESS, payload: smurf}
}

export const fetchFail = (error) => {
    return {type: FETCH_FAIL, payload: error}
}

// export const addSmurf = (smurf) => {
//     return{type: ADD_SMURF, payload: smurf}
// }

export const addSmurf = (name, position, nickname, description) => {
    return{type: ADD_SMURF, payload: name, position, nickname, description}
}

export const setError = (error) => {
    return{type: SET_ERROR, payload: error}
}


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// import axios from 'axios';
// export const FETCH_START = 'FETCH_START';
// export const FETCH_SUCCESS = 'FETCH_SUCCESS';
// export const FETCH_FAIL = 'FETCH_FAIL';
// export const ADD_SMURF = 'ADD_SMURF';
// export const SET_ERROR = 'SET_ERROR';


// // FETCH SMURFS __________________________________________________________

// export const fetchSmurfs = () => (dispatch) => {
//     dispatch({ type: FETCH_START });
//     axios.get('http://localhost:3333/smurfs')
//         .then((res => {
//             dispatch({ type: FETCH_SUCCESS, payload: res.data })  //  here is this (type) this is what is in it (payload) hey reducer, do something with it
//         }))
//         .catch(err => {
//             dispatch({ type: FETCH_FAIL, payload: err })
//         })
// }



// // ADD SMURF _____________________________________________________________

// export const addSmurf = ({ name, position, nickname, description }) => {
    
//     return {
//         type: ADD_SMURF,
//         payload: { name, position, nickname, description }
//     }
// }

// // ERROR MESSAGE _________________________________________________________


// export const errorMessage = (message) => {
    
//     return {
//         type: SET_ERROR,
//         payload: message
//     }
// }







// Task List:
// 1. [x] Add a thunk action called fetchSmurfs that triggers a loading status display in our application, 
//          performs an axios call to retreive smurfs from our server, saves the result of that call to our 
//          state and shows an error if one is made.

// 2. [x] Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)

// 3. [x] Add a standard action that allows us to set the value of the error message slice of state.







// @@@@@@@@@@@@@@@@@@@@@@@@@@ FIRST ATTEMPT BELOW - SO SAD @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// import axios from 'axios';

// export const LOADING = 'LOADING'




// export const fetchSmurfs = (confused) => (dispatch) => {
//     dispatch({ type: LOADING })                   // just says to the reducer, 'hey i'm loading'.
//     axios.get("http://localhost:3333/smurfs")
//      .then(res => {
//          console.log('res???????', res)
//      })
//      .catch(err => {
//          console.log('errrrrrrr', err) 
//      })
// }






