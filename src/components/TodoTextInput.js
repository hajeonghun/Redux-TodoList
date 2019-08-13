import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
 
class TodoTextInput extends Component { 
    state = {
        text: '',
    }
    static propTypes = { 
        todoAdd: PropTypes.func,
    };

    static defaultProps = { 
        todoAdd: () => {console.log('todoAdd is not defined')}
    };

    setText = (e) => {
        this.setState({
            text: e.target.value
        });
    }
    btnAdd = () => {        
        if(this.state.text === ''){
            alert('일정을 입력하세요');
            return;
        }
        this.props.todoAdd(this.state.text);
    }

    render() {

        return(
            <div>
                <input type="text" placeholder="Please, Insert Text" onChange={this.setText}></input>
                <button onClick={this.btnAdd}>Todo Add</button>
            </div>
        );
    }
}


export default TodoTextInput;