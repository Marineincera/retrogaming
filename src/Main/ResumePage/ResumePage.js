
import React from "react";
import { withRouter } from "react-router";
import "./resumePage.css";
import Datas from '../../datas';
import SmallSelectedCharacterComponent from "../commonComponent/SmallSelectedCharacterComponent/SmallSelectedCharacterComponent";
import MenuTitleComponent from "../commonComponent/MenuComponent/MenuTitleComponent/MenuTitleComponent";
import PresentationComponent from "../commonComponent/MenuComponent/PresentationComponent/PresentationComponent";
import EducationComponent from "../commonComponent/MenuComponent/EducationComponent/EducationComponent";
import ProfessionnalComponent from "../commonComponent/MenuComponent/ProfessionnalComponent/ProfessionnalComponent";
import SkillsComponent from "../commonComponent/MenuComponent/SkillsComponent/SkillsComponent";
import ContactComponent from "../commonComponent/MenuComponent/ContactComponent/ContactComponent";

class ResumePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            menuTitles :[{title:"Presentation", num:1}, {title:"Professionnal",num:2}, {title:"Formation",num:3}, {title:"Compétences",num:4}, {title:"Contact",num:5}],
            selectedSectionMenu : 0,
            selectedTitle : " "
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
            const sectionToOpen = this.state.menuTitles.find(element => element.num == this.state.selectedSectionMenu);
            this.setState(state => ({ selectedTitle : sectionToOpen.title}))

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
                        <div key={title.num}  onClick={()=>this.openMenuSection(title)}>
                        <MenuTitleComponent  title={title} selectedTitle={selectedNum} />
                        </div>
                    )
                })}
            </div>
        )
    }

    openMenuSection(title){
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
        let params = this.props.match.params
        this.selectedCharacter = Datas.find(character => character.id == this.props.match.params.persoid);
        return ( 
            <div className="resume-page" id="resume">
                <div className="menu-container">
                    {this.state.selectedTitle === "Presentation" ? <PresentationComponent/> : null }
                    {this.state.selectedTitle === "Formation" ?  <EducationComponent/> : null }
                    {this.state.selectedTitle === "Professionnal" ? <ProfessionnalComponent/> : null }
                    {this.state.selectedTitle === "Compétences" ? <SkillsComponent/> : null }
                    {this.state.selectedTitle === "Contact" ? <ContactComponent/> : null }
                    {this.state.selectedTitle === " " ? this.displayTitle(this.state.selectedSectionMenu) : null }
                </div>
                <SmallSelectedCharacterComponent selectedCharacter={this.selectedCharacter}/>
            </div>
        )
    }   
}

export default withRouter(ResumePage)