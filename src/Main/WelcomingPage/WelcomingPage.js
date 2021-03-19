import React from "react";
import "./welcomingPage.css";
import Typed from 'typed.js';
import { withRouter, Redirect } from 'react-router-dom';
import Datas from '../../datas';
import SelectedCharacterComponent from '../commonComponent/SelectedCharacterComponent/SelectedCharacterComponent';
class WelcomingPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            completed: false
        }
        this.selectedCharacter= {}
        this.to = ""
    }

    componentDidMount(){
        this.typed = new Typed('#welcomingTextFirstSetion', {
            strings: [
                `^1000 Bonjour ${this.props.match.params.pseudo} !`, 
                `^1000 Bienvenue à toi et à ${this.selectedCharacter.name} sur mon cv interactif.`,
                `^1000 J'espère que cela te plaira.`,
                "N'hésite pas à me contacter pour plus d'informations.",
                "Clique ici pour commencer"
            ], 
            typeSpeed: 50
        });
    }

    displayPage = () => {
        let params = this.props.match.params
        this.selectedCharacter = Datas.find(character => character.id == this.props.match.params.persoid);
        
            return (
                <div className="welcoming-page" onClick={this.openResumeDetails}>
                    <div className="welcoming-text-wrapper">
                        <p id="welcomingTextFirstSetion" className="welcoming-text"></p>
                    </div>
                    <SelectedCharacterComponent selectedCharacter={this.selectedCharacter}/>
                </div>
            )        
    }
    
    openResumeDetails = () => {
        this.setState(state => ({ completed: true})); 
        let str1 = "/resume"
        this.to = str1.concat('/',this.props.match.params.persoid,'/', this.props.match.params.pseudo)        
    }


    render(){  
        if(!this.state.completed){
            return(
                this.displayPage()
            )         
        } 
        else {
            return <Redirect to={this.to} />
        }
    }
}
    
export default withRouter(WelcomingPage)