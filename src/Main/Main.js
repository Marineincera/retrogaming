import React from "react";
import "./main.css";
import Homepage from "./Homepage/Homepage";
//Character Selection 
import SelectionCharacterPage from "./SelectionCharacterSection/SelectionCharacterSection";
import Datas from "../datas";
import SelectionCharacterTitleSection from "../images/responsiveImages/persoSelection.jpg";
import PseudoTitle from "../images/commonImages/pseudoTitle.png";
import WelcomingPage from "./WelcomingPage/WelcomingPage";
//
class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectionCharacterPageOpened : false,
            selectedCharacter: null,
            name: "",
            introductionSectionOpened : true,
            welcomingSectionOpened : false

        }     

    }

// From Homepage to Form page
    openSelectionPage = ()  => {
        this.setState(state => ({ selectionCharacterPageOpened: !state.selectionCharacterPageOpened}))

    }

// // SCREENS 
//Homepage and Character Selection page
    introduction = () => {
        return (
            <div className="introduction-section">
                {!this.state.selectionCharacterPageOpened? 
    //Homepage
                <div  onClick={() => {this.openSelectionPage()}}>   
                    <Homepage ></Homepage>
                </div>
                : 
                null
                }
            </div>
            );
    }

    welcome = () => {
        return(
            <div className="welcoming-section">
                <WelcomingPage></WelcomingPage>
            </div>
        )
    }

 
// // // RENDER
    render(){
        if(this.state.introductionSectionOpened){
            return(
                this.introduction()
    
            )
        }
        if(this.state.welcomingSectionOpened){
            return(
                this.welcome()
            )
        }
    }
}


  export default Main