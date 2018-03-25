import uuid from 'uuid';

export const addPhoto = (
    { 
        description = '', 
        title = '',
        imgUrl = '',
        createdAt = 0 
    } = {}) => ({
        type: 'ADD_PHOTO',
        photos: {
            id: uuid(),
            description,
            title,
            imgUrl,
            createdAt
        },
});

export const removePhoto = ({ id } = {}) => ({
    type: 'REMOVE_PHOTO',
    id
});

export const editPhoto = (id, updates) => ({
    type: 'EDIT_PHOTO',
    id,
    updates
});