import React from "react";
import './professionnalComponent.css';
import Professionnal from '../../../../ResumeDatas/professionnalDatas'

class ProfessionnalComponent extends React.Component {
    constructor(props){
        super(props)
        this.professionnalArray = Professionnal;
        this.state = {
        }
    }

    render(){
        return(
        <div className="professionnal-container">
            {this.professionnalArray.map(professionnal => { 
                return(
                    <div key={professionnal.title} className="professionnal-case">
                        <h2 className="professionnal-title" >{professionnal.workTitle}</h2>
                        <p className="professionnal-subtitle">{professionnal.company}</p>
                        <p className="professionnal-text">{professionnal.statut}</p>
                        <p className="professionnal-text">{professionnal.date}</p>
                        <p className="professionnal-text">{professionnal.city}</p>
                        <p className="professionnal-text">{professionnal.description}</p>

                    </div>    
                )
            })
            }
        </div>
        )
    }
}

export default ProfessionnalComponent