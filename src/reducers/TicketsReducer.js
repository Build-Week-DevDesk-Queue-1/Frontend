import {
    TICKETS_LOADING,
    TICKETS_SUCCESS,
    TICKETS_FAILURE
} from '../actions';

const initialState = {
    tickets: [],
    isLoading: false,
    error: ""
}

const TicketsReducer = (state = initialState, action) => {
    switch(action.type) {
        case TICKETS_LOADING:
            console.log("Starts to get all tickets");
            return {
                ...state,
                isLoading: true,
            }
        case TICKETS_SUCCESS: 
            console.log("Successfully getting the tickets");
            return {
                ...state,
                tickets: action.payload.data,
                isLoading: false
            }
        case TICKETS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.data
            }
        default: 
            return state
    }
}

export default TicketsReducer;