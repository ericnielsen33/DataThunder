import { SET_LOADER, SET_NOTIFICATION } from '../actions/types';

const initialState = {
    loader: false,
    notification: null
};

export const uiReducer = (ui = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case SET_LOADER:
            return {...ui, loading: payload};
        case SET_NOTIFICATION:
            return {...ui, notification: payload};
        default:
            return ui;
    }
};