const initialState = {
    holidays: [],
};

const holidayReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_HOLIDAYS':
            return {
                ...state,
                holidays: action.payload,
            };
        default:
            return state;
    }
};

export default holidayReducer;