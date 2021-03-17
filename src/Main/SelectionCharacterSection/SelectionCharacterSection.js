import React from "react";
import characters from "../../datas"

class SelectionCharacterSection extends React.Component {
    constructor(props){
      super(props)
    }
        render(){
            return (
            <div >
               <img src={this.props.character.avatar}/>
            </div>
            );
            }
        }
    
    
      export default SelectionCharacterSection