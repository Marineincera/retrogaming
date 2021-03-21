
import React from "react";
import "./gamePage.css";
import { withRouter } from 'react-router-dom';
import Datas from '../../datas';
import SmallSelectedCharacterComponent from "../commonComponent/SmallSelectedCharacterComponent/SmallSelectedCharacterComponent";

class GamePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          
        }
        this.params = this.props.match.params
        this.selectedCharacter = {}
    }


    
    render(){
        this.selectedCharacter = Datas.find(character => character.id == this.props.match.params.persoid);
        console.log(this.selectedCharacter);
        return(
            <div className="game-page">
                <SmallSelectedCharacterComponent selectedCharacter={this.selectedCharacter}/>
            </div>
        )
    }
        
}

export default withRouter(GamePage)