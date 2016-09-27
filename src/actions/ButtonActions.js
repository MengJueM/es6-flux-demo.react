import {AppDispatcher} from '../dispatcher/AppDispatcher';

export const ButtonActions = {
    addNewItem: function (text) {
        AppDispatcher.dispatch({
            actionType: 'ADD_NEW_ITEM',
            text: 'text'
        });
    }
};
