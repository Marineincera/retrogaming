import React from "react";
import characters from "../../datas";
import "./selectionCharacterSection.css";

class SelectionCharacterSection extends React.Component {
    constructor(props){
      super(props)
    }
        render(){
          if(this.props.selectedCharacter === this.props.character ){
              return (
                <div className="selected-character">
                  <img src={this.props.character.avatar} className="avatar"/>
                </div>
              )
          }
          else {
            return (
              <div >
                <img src={this.props.character.avatar} className="avatar"/>
              </div>
            )
          }
        }
}
    
    
export default SelectionCharacterSection