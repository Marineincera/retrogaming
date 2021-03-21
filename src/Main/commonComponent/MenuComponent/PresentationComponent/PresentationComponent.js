
import React from "react";
import "./presentationComponent.css";
import presentation from '../../../../ResumeDatas/presentationDatas'

class PresentationComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return(
            <div className="presentation-container">
                <div className="presentation-name">
                    {/* <h2 className="presentation-text presentation-title">Prenom : </h2> */}
                    <p className="presentation-text">{presentation.name}</p>
                </div>
                <div className="presentation-age">
                    {/* <h2 className="presentation-text presentation-title">Age :  </h2> */}
                    <p className="presentation-text">{presentation.age} ans</p>
                </div>
                <div className="presentation-location">
                    {/* <h2 className="presentation-text presentation-title">Pays - Ville :  </h2> */}
                    <p className="presentation-text"> {presentation.country} - {presentation.city}</p>
                </div>
              
                <div className="presentation-fondamentals">
                       {presentation.fondamentalsSkills.map((skill)=> {
                           return <span className="presentation-text" key={skill}> {skill} </span>
                       })}
                </div>
                <div className="presentation-personnalskills">
                   <ul className="">
                       {presentation.personnalSkills.map((skill)=> {
                           return <li className="presentation-text" key={skill}>{skill}</li>
                       })}
                   </ul>
                </div>
            </div>
        )
    }
}

export default PresentationComponent