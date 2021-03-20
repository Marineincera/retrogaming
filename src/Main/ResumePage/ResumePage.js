
import React from "react";
import { withRouter } from "react-router";
import "./resumePage.css";
import Datas from '../../datas';
import SmallSelectedCharacterComponent from "../commonComponent/SmallSelectedCharacterComponent/SmallSelectedCharacterComponent";
import MenuTitleComponent from "../commonComponent/MenuComponent/MenuTitleComponent/MenuTitleComponent";
import PresentationComponent from "../commonComponent/MenuComponent/PresentationComponent/PresentationComponent";

class ResumePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            menuTitles :[{title:"Presentation", num:1}, {title:"Experience Pro",num:2}, {title:"Formation",num:3}, {title:"+",num:4}, {title:"Contact",num:5}],
            selectedSectionMenu : 0,
            menu : true
        }
        this.selectedCharacter= {}    
    }

// interactive Menu
    selectionSection(event){
        if(event.keyCode === 40){
           this.goDown()
        }
        if(event.keyCode === 38){
            this.goUp();
        }
        if(event.keyCode === 13){
           this.openMenuSection()
        }
    }

    goDown(){
        if(this.state.selectedSectionMenu == 5){
            this.setState(state => ({ selectedSectionMenu : 1}))
           
        } else {
           const newNum = this.state.selectedSectionMenu + 1;
           this.setState(state => ({ selectedSectionMenu : newNum}))
        }
    }

    goUp(){
        if(this.state.selectedSectionMenu == 1){
            this.setState(state => ({ selectedSectionMenu : 5}))
           
        } else {
           const newNum = this.state.selectedSectionMenu - 1;
           this.setState(state => ({ selectedSectionMenu : newNum}))
        }
    }
///
    displayTitle(selectedNum){
        return ( 
            <div >
            {this.state.menuTitles.map((title) => {
                return (
                    <div onClick={()=>this.openMenuSection(title)}>
                    <MenuTitleComponent key={title.num} title={title} selectedTitle={selectedNum} />
                    </div>
                 )
            })}
            </div>
        )
    }

    openMenuSection(title){
        this.setState(state => ({ menu : false}))
        console.log(title);
    }

    componentDidMount(){
        const el = document.querySelector('#resume')
        window.addEventListener('keydown',(event) => {
            this.selectionSection(event)
        });
        this.render()
    }

    render(){
        console.log(this.state.selectedSectionMenu);
        let params = this.props.match.params
        this.selectedCharacter = Datas.find(character => character.id == this.props.match.params.persoid);
        return(
           <div className="resume-page" id="resume">
               <div className="menu-container">
                   {this.state.menu ? this.displayTitle(this.state.selectedSectionMenu) : <PresentationComponent/>}          
               </div>
               <SmallSelectedCharacterComponent selectedCharacter={this.selectedCharacter}/>
            </div>
        )
    }    
}

export default withRouter(ResumePage)