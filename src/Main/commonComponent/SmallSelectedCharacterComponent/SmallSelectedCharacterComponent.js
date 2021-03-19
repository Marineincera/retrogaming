
import React from "react";
import "./smallSelectedCharacterComponent.css";

class SmallSelectedCharacterComponent extends React.Component {
    constructor(props){
        super(props)
 
    }
    
    render(){
        return(
            <img src={this.props.selectedCharacter.fullimg} className="small-size-character" />
        )
    }
        
}

export default SmallSelectedCharacterComponent