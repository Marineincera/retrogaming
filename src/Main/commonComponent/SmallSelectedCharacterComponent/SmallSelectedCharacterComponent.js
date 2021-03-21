
import React from "react";
import "./smallSelectedCharacterComponent.css";

class SmallSelectedCharacterComponent extends React.Component {
    constructor(props){
        super(props)
        this.positionArray = [
            {num : 1, class: "small-size-character position-first"},
            {num : 2, class: "small-size-character position-second"}, 
            {num : 3, class: "small-size-character position-third"},
            {num : 4, class: "small-size-character position-fourth"},
            {num : 5, class: "small-size-character position-fifth"},
            {num : 6, class: "small-size-character position-sixth"},
            {num : 7, class: "small-size-character position-seventh"},
            {num : 8, class: "small-size-character position-eigth"},
            {num : 9, class: "small-size-character position-nineth"},
        ]
        this.state = {
            position : this.positionArray[0],
        }
 
    }


    movingCharacter(event, position, array){
        if(event.keyCode === 39){
            this.goRightSide(event, position, array)  
        }
        if(event.keyCode === 37){
            this.goLeftSide(event, position, array)
        }
    }

    goRightSide(event, position, array){
        if(position.num <= 8) {
            const newNum= position.num + 1;
            const newPosition = array.find(element => element.num === newNum);
            this.setState(state => ({position : newPosition}));

        }

    }

    goLeftSide(event, position, array){
        if(position.num > 1){
            const newNum= position.num - 1;
            const newPosition = array.find(element => element.num === newNum);
            this.setState(state => ({position : newPosition}));
        }
    }

    componentDidMount(){
        const el = document.querySelector('#smallC')
        window.addEventListener('keydown',(event) => {
            this.movingCharacter(event, this.state.position, this.positionArray)
        });
   
    }
    


    render(){

        return(
            <img id="smallC" src={this.props.selectedCharacter.fullimg} className={this.state.position.class} />
        )
    }
        
}

export default SmallSelectedCharacterComponent