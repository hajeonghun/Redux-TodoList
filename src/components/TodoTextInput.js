import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
 
class TodoTextInput extends Component { 
    state = {}
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