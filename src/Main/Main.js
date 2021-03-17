import React from "react";
import Homepage from "./Homepage/Homepage";
import SelectionCharacterPage from "./SelectionCharacterSection/SelectionCharacterSection";
import Datas from "../datas";
class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectionCharacterPageOpened : false,
            selectedCharacter: null,
            name: ""
            
        }     

    }

// From Homepage to Form page
    openSelectionPage = ()  => {
        this.setState(state => ({ selectionCharacterPageOpened: !state.selectionCharacterPageOpened}))

    }
// Form Page / Selection of a character 
    chooseACharacter = (character) => {
        this.setState(state => ({ selectedCharacter: character}));
    }

    nameOnChange = (e) => {
        this.setState({name:e.target.value});
    }

    formValidation = () => {
        console.log(this.state.name);
        console.log(this.state.selectedCharacter);
    } 

//

    render(){
        return (
        <div>
            {!this.state.selectionCharacterPageOpened? 
            <div  onClick={() => {this.openSelectionPage()}}>   
                <Homepage ></Homepage>
            </div>
            : 
            <div className="selectionCharacter">
                {Datas.map((character) => (
                    <div  key={character.id}  onClick={() => this.chooseACharacter(character)} >
                        < SelectionCharacterPage character={character}></SelectionCharacterPage>
                    </div>
                ))}
                 <input type="text" onChange={this.nameOnChange}></input>
                <p className="press-button-mario" onClick={() => this.formValidation()}>Valider</p>
            </div>
            }
        </div>
        );
        }
    }


  export default Main