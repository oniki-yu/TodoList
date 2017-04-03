import { combineReducers } from 'redux';
import {GET_TODO, ADD_TODO, DELETE_TODO} from './actions';

const box = (state = {
    tasks: [],
    text: '',
}, action) => {
    const{tasks, text} = state;
    switch (action.type) {
        case GET_TODO:
            return Object.assign({}, state, {
                text: action.text,
        });
        case ADD_TODO:
            return Object.assign({}, state, {
                tasks: tasks.concat([text]),
                text: ''
            });
        case DELETE_TODO:
            const newTasks = tasks.concat();
            console.log("splice前");
            console.log(tasks);
            newTasks.splice(action.id ,1);
            console.log("splice後");
            console.log(tasks);
            return Object.assign({}, state, {
                tasks: newTasks
            });
        default:
            return state;
    }
};

export const reducer = combineReducers({
    box
});