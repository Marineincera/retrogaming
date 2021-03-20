
import React from "react";
import { withRouter } from "react-router";
import "./resumePage.css";
import Datas from '../../datas';
import SmallSelectedCharacterComponent from "../commonComponent/SmallSelectedCharacterComponent/SmallSelectedCharacterComponent";
import MenuTitleComponent from "../commonComponent/MenuComponent/MenuTitleComponent/MenuTitleComponent";
import PresentationComponent from "../commonComponent/MenuComponent/PresentationComponent/PresentationComponent";
import EducationComponent from "../commonComponent/MenuComponent/EducationComponent/EducationComponent";

class ResumePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            menuTitles :[{title:"Presentation", num:1}, {title:"Experience Pro",num:2}, {title:"Formation",num:3}, {title:"+",num:4}, {title:"Contact",num:5}],
            selectedSectionMenu : 0,
            menu : true,
            titleSelected : " "
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
        this.setState(state => ({ selectedTitle : title.title}))
    }

// KeyPress Detection 
    componentDidMount(){
        const el = document.querySelector('#resume')
        window.addEventListener('keydown',(event) => {
            this.selectionSection(event)
        });
        this.render()
    }
//

    render(){
        console.log(this.state.selectedSectionMenu);
        let params = this.props.match.params
        this.selectedCharacter = Datas.find(character => character.id == this.props.match.params.persoid);
        switch (this.state.selectedTitle) {
            case "Presentation":
                return ( 
                    <div className="resume-page" id="resume">
                        <div className="menu-container">
                            <PresentationComponent/>
                        </div>
                        <SmallSelectedCharacterComponent selectedCharacter={this.selectedCharacter}/>
                    </div>
                )
                break;
            case "Formation":
                return(
                    <div className="resume-page" id="resume">
                        <div className="menu-container">
                            <EducationComponent/>
                        </div>
                        <SmallSelectedCharacterComponent selectedCharacter={this.selectedCharacter}/>
                    </div>
                )
                break;
            default:
                return (
                    <div className="resume-page" id="resume">
                        <div className="menu-container">
                            {this.displayTitle(this.state.selectedSectionMenu)}
                        </div>
                        <SmallSelectedCharacterComponent selectedCharacter={this.selectedCharacter}/>
                    </div>
                )
                break;
        }
    }    
}

export default withRouter(ResumePage)