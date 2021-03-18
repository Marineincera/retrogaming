import React from "react";
import "./main.css";
import Homepage from "./Homepage/Homepage";
//Character Selection 
import SelectionCharacterPage from "./SelectionCharacterSection/SelectionCharacterSection";
import Datas from "../datas";
import SelectionCharacterTitleSection from "../images/responsiveImages/persoSelection.jpg";
import PseudoTitle from "../images/commonImages/pseudoTitle.png";
//
class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectionCharacterPageOpened : false,
            selectedCharacter: null,
            name: "",
        }     

    }

// From Homepage to Form page
    openSelectionPage = ()  => {
        this.setState(state => ({ selectionCharacterPageOpened: !state.selectionCharacterPageOpened}))

    }
// Form Page / Character Selection
    chooseACharacter = (character) => {
        this.setState(state => ({ selectedCharacter: character}));   
    }

    nameOnChange = (e) => {
        this.setState({name:e.target.value});
    }

    formValidation = () => {
        if(this.state.selectedCharacter === null){
            alert("Merci de choisir un personnage")
        }
        if(this.state.name === ""){
            alert("Merci d'entrer un pseudo/nom")
        }
        else{
            console.log(this.state.selectedCharacter);
        }
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
    // Selection character + name page
                <div className="selection-character-section">
                    <img src={SelectionCharacterTitleSection} className="character-section-title" />
                    <div className="character-list">
                        {Datas.map((character) => (
                            <div  key={character.id}  onClick={() => this.chooseACharacter(character)} >
                                < SelectionCharacterPage selectedCharacter={this.state.selectedCharacter} character={character}></SelectionCharacterPage>
                            </div>
                        ))}
                    </div>
                    <img src={PseudoTitle} className="character-section-title" />
                    <input type="text" onChange={this.nameOnChange} className="name-input"></input>
                    <p className="press-button-mario form-button" onClick={() => this.formValidation()}>Valider</p>
                </div>
                }
            </div>
            );
    }

 
// // // RENDER
    render(){
        return(
            this.introduction()
        )
    }
}


  export default Main