import { 
    FETCH_GNOMES_BEGIN, 
    FETCH_GNOMES_SUCCESS, 
    FETCH_GNOMES_FAILURE ,
    FETCH_FILTERED_GNOMES_SUCCESS
} from "./gnomeListActions";

const defaultState = {
    allGnomes: [],
    filteredGnomes: []
}

const gnomeListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_GNOMES_BEGIN:
            return {
                ...state
            }
        case FETCH_GNOMES_SUCCESS:
            return {
                ...state,
                allGnomes: action.payload
            }
        case FETCH_GNOMES_FAILURE:
            return {
                ...state
            }
        case FETCH_FILTERED_GNOMES_SUCCESS: 
            return {
                ...state,
                filteredGnomes: action.payload
            }
        default: 
            return state
    }
}

export default gnomeListReducer;