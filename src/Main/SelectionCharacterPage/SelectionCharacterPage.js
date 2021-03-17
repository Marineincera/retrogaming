import React from "react";
import characters from "../../datas"

class SelectionCharacterPage extends React.Component {
    
        render(){
            return (
            <div>
               <img src={characters[1].avatar}/>
            </div>
            );
            }
        }
    
    
      export default SelectionCharacterPage