import { 
    FETCH_GNOMES_BEGIN, 
    FETCH_GNOMES_SUCCESS, 
    FETCH_GNOMES_FAILURE 
} from "./GnomeListActions.js";

const defaultState = {
    allGnomes: []   
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
        default: 
            return state
    }
}

export default gnomeListReducer;