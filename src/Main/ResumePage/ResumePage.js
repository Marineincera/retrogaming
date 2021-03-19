
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

    openMenuSection(title){
        console.log(title);
    }
    
    render(){
        window.addEventListener('keydown', (event) => {
            alert('rr')
          });
        let params = this.props.match.params
        this.selectedCharacter = Datas.find(character => character.id == this.props.match.params.persoid);
        return(
           <div className="resume-page">
               <div className="menu-container">
               {this.state.menuTitles.map((title) => {
                        return (
                            <div key={title} className="menu-title-case" onClick={() =>this.openMenuSection(title)}>
                                <p className="menu-arrow">---</p>
                                <p className="menu-title">{title}</p>
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