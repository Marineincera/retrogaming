import React from "react";
import "./welcomingPage.css";
import Typed from 'typed.js';
import { withRouter } from 'react-router-dom';

class WelcomingPage extends React.Component {
    constructor(props){
        super(props)
      }

    componentDidMount(){
        let params = this.props.match.params
        console.log(params);
        this.typed = new Typed('#welcomingTextFirstSetion', {
            strings: [
                `^1000 Bonjour ${params.pseudo} !`, 
                // `^1000 Bienvenue à toi et à ${this.props.selectedCharacter.name} sur mon cv interactif.`,
                // `^1000 J'espère que cela te plaira.`,
                "N'hésite pas à me contacter pour plus d'informations.",
                "Clique ici pour commencer"
            ], 
            typeSpeed: 50
          });
    }
    
    render(){    
        return (
            <div className="welcoming-page">
                 <div className="welcoming-text-wrapper">
                 <p id="welcomingTextFirstSetion" className="welcoming-text"></p>
                </div>
                    {/* <img src={this.props.selectedCharacter.fullimg} className="fullsize-character" /> */}
                </div>
        )      
    }
}
    
    
export default withRouter(WelcomingPage)