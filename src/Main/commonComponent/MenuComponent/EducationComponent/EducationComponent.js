import React from "react";
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
                    <div className="education-case">
                        <h2>{education.title}</h2>
                        <h2>{education.level}</h2>
                        <p>{education.school}</p>
                        <p>{education.date}</p>
                        <p>{education.description}</p>
                    </div>    
                )
            })
            }
        </div>
        )
    }
}

export default EducationComponent