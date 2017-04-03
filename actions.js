export const GET_TODO = 'GET_TODO';
export  const ADD_TODO = 'ADD_TODO';
export  const DELETE_TODO = 'DELETE_TODO';

export const getTodo = (text) => {
    return {
        type: 'GET_TODO',
        text
    }
};

export const addTodo = () => {
    return {
        type: 'ADD_TODO',
    }
};

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    }
};