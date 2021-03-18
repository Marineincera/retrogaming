
import React from "react";
import "./selectedCharacterComponent.css";

class SelectedCharacter extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <img src={this.props.selectedCharacter.fullimg} className="fullsize-character" />
            )
    }
        
}

export default SelectedCharacter