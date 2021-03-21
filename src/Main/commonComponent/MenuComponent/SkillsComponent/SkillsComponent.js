import React from "react";
import './skillsComponent.css';
import Skills from '../../../../ResumeDatas/skillsDatas';

class SkillsComponent extends React.Component {
    constructor(props){
        super(props)
        this.skillsArray = Skills;
        this.state = {
        }
    }

    render(){
        return(
        <div className="skills-container">
            {this.skillsArray.map(array => { 
                return(
                    <div key={array.title} className="skills-case">
                        <h2 className="skills-title" >{array.title}</h2>
                        {array.title !== "Outils numériques" ?
                            array.skillsList.map(skill => {
                                return <p key={skill} className="skills-text">{skill}</p>
                            })
                        : 
                            array.skillsList.map(numSkill => {
                                return <p key={numSkill.id} className="skills-text">{numSkill.name}</p>
                            })
                        }
                    </div>    
                )
            })
            }
        </div>
        )
    }
}

export default SkillsComponent