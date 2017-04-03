import { combineReducers } from 'redux';
import {GET_TODO, ADD_TODO, DELETE_TODO, FAVORITE_TODO} from './actions';

const box = (state = {
    tasks: [],
    text: '',
}, action) => {
    const {tasks, text} = state;
    const newTasks = tasks.concat();
    switch (action.type) {
        case GET_TODO:
            return Object.assign({}, state, {
                text: action.text,
        });
        case ADD_TODO:
            return Object.assign({}, state, {
                tasks: tasks.concat({
                    "text": text,
                    "favorite": false,
                }),
                text: ''
            });
        case DELETE_TODO:
            newTasks.splice(action.id ,1);
            return Object.assign({}, state, {
                tasks: newTasks,
            });
        case FAVORITE_TODO:
            const target = newTasks[action.id];
            target.favorite = !target.favorite;
            return Object.assign({}, state, {
                tasks: newTasks,
            });
        default:
            return state;
    }
};

export const reducer = combineReducers({
    box
});