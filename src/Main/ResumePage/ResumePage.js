
import React from "react";
import { withRouter } from "react-router";
import "./resumePage.css";
import Datas from '../../datas';
import SmallSelectedCharacterComponent from "../commonComponent/SmallSelectedCharacterComponent/SmallSelectedCharacterComponent";

class ResumePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            menuTitles :["Presentation", "Experience Pro", "Formation", "+", "Contact"]
        }
        this.selectedCharacter= {}
        
    }

    
    render(){
        let params = this.props.match.params
        this.selectedCharacter = Datas.find(character => character.id == this.props.match.params.persoid);
        return(
           <div className="resume-page">
               <div className="menu-container">
               {this.state.menuTitles.map((title) => {
                        return (
                            <div key={title} className="menu-title">
                                <p>{title}</p>
                            </div>
                        )
                    })}
               </div>
               <SmallSelectedCharacterComponent selectedCharacter={this.selectedCharacter}/>
            </div>
        )
    }
        
}

export default withRouter(ResumePage)