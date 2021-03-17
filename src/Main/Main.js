import React from "react";
import Homepage from "./Homepage/Homepage";
import SelectionCharacterPage from "./SelectionCharacterPage/SelectionCharacterPage";

class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectionCharacterPageOpened : false,
            selectedCharacter: null
            
        }     
    }

    openSelectionPage = ()  => {
        this.setState(state => ({ selectionCharacterPageOpened: !state.selectionCharacterPageOpened}))

    }


    render(){
        return (
        <div>
            {!this.state.selectionCharacterPageOpened? 
            <div  onClick={() => {this.openSelectionPage()}}>   
                <Homepage ></Homepage>
            </div>
            : 
                <SelectionCharacterPage></SelectionCharacterPage>
            }
        </div>
        );
        }
    }


  export default Main