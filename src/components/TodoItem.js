import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as css from '../css';

class TodoItem extends Component {
    static funDefine = (funName) => { console.log(funName, 'is not defined') };

    static propTypes = {
        todoChk: PropTypes.func,
        todoDel: PropTypes.func,
        id: PropTypes.number,
        text: PropTypes.string,
        check: PropTypes.bool,
    };

    static defaultProps = {
        todoChk: this.funDefine('todoChk'),
        todoDel: this.funDefine('todoDel'),
        id: -1,
        text: 'define',
        check: false,
    };

    btnChk = () => {
        this.props.todoChk(this.props.id)
    }
    btnDel = () => {
        this.props.todoDel(this.props.id)
    }
    textChange = () => {
        if (this.props.check)
            return <span style={css.todoItem_redFont}>{this.props.text}</span>
        else
            return <span style={css.todoItem_blackFont}>{this.props.text}</span>

    }
    render() {

        return (
            <div>
                <input type="checkbox" onChange={this.btnChk} checked={this.props.check}></input>
                {this.textChange()}
                <button onClick={this.btnDel}>Todo Del</button>

            </div>
        );
    }
}


export default TodoItem;