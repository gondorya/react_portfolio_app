export const setTitleFilter = (title = '') => ({
    type: 'SET_TITLE_FILTER',
    title
});

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

export const sortByTitle = () => ({
    type: 'SORT_BY_TITLE'
});

export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});