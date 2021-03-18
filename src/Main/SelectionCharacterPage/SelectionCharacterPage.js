import React from "react";
import Datas from "../../datas";
import './selectionCharacterPage.css';
import SelectionCharacterTitleSection from "../../images/responsiveImages/persoSelection.jpg";
import PseudoTitle from "../../images/commonImages/pseudoTitle.png";
import SelectionCharacterSection from "../SelectionCharacterSection/SelectionCharacterSection";
import {  Redirect   } from "react-router-dom";


class SelectionCharacterPage extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        selectedCharacter: null,
        name: "",
        completed : false
    }}


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
            this.setState(state => ({ completed: true}));  
        }
    } 
    render(){
        if(!this.state.completed){
            return(
                <div className="selection-character-section">
                    <img src={SelectionCharacterTitleSection} className="character-section-title" />
                    <div className="character-list">
                        {Datas.map((character) => (
                            <div  key={character.id}  onClick={() => this.chooseACharacter(character)} >
                                < SelectionCharacterSection selectedCharacter={this.state.selectedCharacter} character={character}/>
                            </div>
                        ))}
                    </div>
                    <img src={PseudoTitle} className="character-section-title" />
                    <input type="text" onChange={this.nameOnChange} className="name-input"></input>
                    <p className="press-button-mario form-button" onClick={() => this.formValidation()}>Valider</p>
                </div>       
            )
        }
        else
        {    
            return <Redirect to='/welcome' />
        }
    }
}
        
export default SelectionCharacterPage