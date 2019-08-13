import React, { Component } from 'react'; 
import TodoTextInput from './TodoTextInput' ;

class Header extends Component { 


    render() {

        return(
            <div>
                <h1>TODO LIST</h1>
                <TodoTextInput todoAdd={this.props.todoAdd}/>
            </div>
        );
    }
}


export default Header;