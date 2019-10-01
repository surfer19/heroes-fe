import { 
    FETCH_GNOMES_BEGIN, 
    FETCH_GNOMES_SUCCESS, 
    FETCH_GNOMES_FAILURE 
} from "./gnomeListActions";

const defaultState = {
    allGnomes: []
}

export const rootReducer = (state, action) => {
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
            return defaultState
    }
}