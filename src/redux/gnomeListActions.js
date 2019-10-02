import mockData from "../mocks/mock-gnomes.json";

/*
 * CONSTANTS
 */

// fetch gnomes
export const FETCH_GNOMES_BEGIN = "FETCH_GNOMES_BEGIN"; // TODO: loading
export const FETCH_GNOMES_SUCCESS = "FETCH_GNOMES_SUCCESS";
export const FETCH_GNOMES_FAILURE = "FETCH_GNOMES_FAILURE"; //TODO:

/*
 * FUNCTIONS
 */

// fetch gnomes
export const fetchAllGnomes = () => {
    return async dispatch => { //         
        try {
            dispatch(fetchAllGnomesBegin())
            // setTimeout for testing purpose
            setTimeout(() => {
                // call api 
                const response = mockData;
                // success
                dispatch(fetchAllGnomesSuccess(response))
            }, 1000)
        } catch (err) {
            dispatch(fetchAllGnomesFailure(err))
        }
    }
}

function fetchAllGnomesBegin() {
    return  {
        type: FETCH_GNOMES_BEGIN
    }
}

function fetchAllGnomesSuccess(responseData) {
    return {
        type: FETCH_GNOMES_SUCCESS,
        payload: responseData.Brastlewark
    }
}

function fetchAllGnomesFailure(err) {
    return {
        type: FETCH_GNOMES_FAILURE,
        error: err
    }
}
