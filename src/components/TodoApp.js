import React, { Component } from 'react'; 
import Header from './Header';
import MainSection from './MainSection';
import {connect} from 'react-redux';
import * as actions from '../actions';
import TodoItem from './TodoItem';

class TodoApp extends Component { 

    todoItems = () => {
        return this.props.todos.map((v,k) => {
            return <TodoItem
            key={k}
            id={v.id}
            text={v.text}
            check={v.check}
            todoChk={this.props.handleTodoChk}
            todoDel={this.props.handleTodoDel}
            />
        })
    }

    render() {

        return(
            <div>
                <Header todoAdd={this.props.handleTodoAdd}/>
                <MainSection todoItems={this.todoItems}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todoReduce.todos,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleTodoAdd: (text) => {dispatch(actions.todoAdd(text))},
        handleTodoChk: (id) => {dispatch(actions.todoChk(id))},
        handleTodoDel: (id) => {dispatch(actions.todoDel(id))},
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoApp);