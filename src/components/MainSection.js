import React, { Component } from 'react'; 

class MainSection extends Component { 


    render() {

        return(
            <div>
                {/* 동적으로 생성 */}
                {this.props.todoItems()}
            </div>
        );
    }
}


export default MainSection;