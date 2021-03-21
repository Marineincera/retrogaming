
import React from "react";
import "./contactComponent.css";
import presentation from '../../../../ResumeDatas/presentationDatas'

class ContactComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return(
            <div className="contact-container">
                <h2 className="contact-title">{presentation.phone}</h2>
                <h2 className="contact-title">{presentation.mail}</h2>
            </div>
        )
    }
}

export default ContactComponent