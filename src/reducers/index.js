import {
    FETCH_START,
    FETCH_SUCCESS,
    SET_ERROR,
    FETCH_FAIL,
    ADD_SMURF
} from '../actions/index'


// A reducer always returns a copy (...state) that is what makes it pure, that is what makes it a reducer.

export const initialState = {
    smurfs: [],
    isLoading: false,
    error: 'THINGS ARE NOT RIGHT.'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }

        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                smurfs: action.payload
            }

        case FETCH_FAIL:  // Sanity check by changing fetch URL
            return {
                ...state,
                error: action.payload
            }

        case ADD_SMURF:   // Have not sanity checked yet. Not sure if state is correct either.
            return {
                ...state,
                payload: action.payload
            }

        case SET_ERROR:
            return {
                ...state,
                error: '',
                payload: action.payload
            }

        default:
            return state;
    }
}


//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;



//Task List:
// [x] 1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message
//2.[x] Add in the arguments needed to complete a standard reducer function.
//3.[x] Add in a reducer case to accomidate the start of a smurf fetch.
//4.[x] Add in a reducer case to accomidate the successful smurf api fetch.

//5. x Add in a reducer cases to accomidate the failed smurf api fetch.
//6. x Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. x Add in a reducer case that adds in a value to the error message.