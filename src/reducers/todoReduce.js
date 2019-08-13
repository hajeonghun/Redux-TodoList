import * as types from '../actions/ActionTypes';
const initialState = {
    todos: [
        {
            id: 0,
            text: 'test',
            check: false,
        },
    ]
}
function findTodo(id, todos) {
    for (let i = 0; i < todos.length; ++i) {
        if (id === todos[i].id) {
            // todos[i].check = todos[i].check ? false : true;
            return {
                todo: todos[i],
                index: i,
            }
        }
    }
}
function copy(todos, id) {
    return {
        copyS: todos.slice(0, id),
        copyE: todos.slice(id + 1, todos.length)
    };
}

export default function todoReduce(state = initialState, action) {
    switch (action.type) {
        case types.TODOADD:
            if (state.todos.length === 0) {
                return {
                    todos: [
                        {
                            id: 1,
                            text: action.text,
                            check: action.check,
                        }]
                }
            }
            return {
                todos: [
                    ...state.todos,
                    {
                        id: state.todos[state.todos.length-1].id + 1,
                        text: action.text,
                        check: action.check,
                    },
                ]
            };
        case types.TODOCHK:
            const modifyTodo = findTodo(action.id, state.todos);
            const modifyItem = modifyTodo.todo;
            const modifyIndex = modifyTodo.index;
            const mcopyTodos = copy(state.todos, modifyIndex);
            console.log('TODOCHK :', !modifyItem.check);
            return {
                todos: [
                    ...mcopyTodos.copyS,
                    {
                        ...modifyItem,
                        check: !modifyItem.check,
                    },
                    ...mcopyTodos.copyE,
                ],
            };
        case types.TODODEL:
            const deleteTodo = findTodo(action.id, state.todos);
            const deleteIndex = deleteTodo.index;
            const dcopyTodos = copy(state.todos, deleteIndex);
            return {
                todos: [
                    ...dcopyTodos.copyS,
                    ...dcopyTodos.copyE,
                ]

            };
        default:
            return state;
    }
}