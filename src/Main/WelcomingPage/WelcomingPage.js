import React from "react";
import "./welcomingPage.css";
import Typed from 'typed.js';

class WelcomingPage extends React.Component {
    constructor(props){
      super(props)
    
    }
    

    
        
    componentDidMount(){
        this.typed = new Typed('#welcomingTextFirstSetion', {
            strings: [
                `^1000 Bonjour ${this.props.name} !`, 
                `^1000 Bienvenue à toi et à ${this.props.selectedCharacter.name} sur mon cv interactif.`,
                `^1000 J'espère que cela te plaira.`,
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
                    <img src={this.props.selectedCharacter.fullimg} className="fullsize-character" />
                </div>
            )
          
        }
}
    
    
export default WelcomingPage