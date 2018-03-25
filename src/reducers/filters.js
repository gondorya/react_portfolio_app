const filterReducerDefaultState = {
    title: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

export default (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TITLE_FILTER':
            return {
                ...state,
                title: action.title
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_TITLE':
            return {
                ...state,
                sortBy: 'title'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};
