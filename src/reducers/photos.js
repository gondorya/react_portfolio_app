const photosReducerDefaultState = [];

export default (state = photosReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PHOTO':
            return [
                ...state,
                action.photos
            ];
        case 'REMOVE_PHOTO':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_PHOTO':
            return state.map((photo) => {
                if (photo.id === action.id) {
                    return {
                        ...photo,
                        ...action.updates
                    };
                } else {
                    return photo
                }
            });
        default:
            return state;
    }
};
