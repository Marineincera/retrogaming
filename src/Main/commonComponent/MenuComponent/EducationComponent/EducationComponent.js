import React from "react";
import './educationComponent.css';
import Education from '../../../../ResumeDatas/educationDatas'

class EducationComponent extends React.Component {
    constructor(props){
        super(props)
        this.educationArray = Education;
        this.state = {
        }
    }

    render(){
        return(
        <div className="education-container">
            {this.educationArray.map(education => { 
                return(
                    <div key={education.title} className="education-case">
                        <h2 className="education-title" >{education.title}</h2>
                        <h2 className="education-subtitle">{education.level}</h2>
                        <p className="education-text">{education.school}</p>
                        <p className="education-text">{education.date}</p>
                        <p className="education-text">{education.description}</p>
                    </div>    
                )
            })
            }
        </div>
        )
    }
}

export default EducationComponent