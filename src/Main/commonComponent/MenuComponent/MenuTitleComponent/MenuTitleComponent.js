import React from "react";
import "./menuTitleComponent.css";


class MenuTitleComponent extends React.Component {
    constructor(props){
        super(props)
    }


    openMenuSection(title){
        // console.log(title);
    }

    render(){
        if(this.props.title.num == this.props.selectedTitle){
            return (
                <div  className="menu-title-case" onClick={()=> this.openMenuSection(this.props.title.title)}>
                <p className="menu-arrow">---</p>
                <p className="menu-title-selected">{this.props.title.title}</p>
            </div>
            )
       }else {
            return (
            
                <div  className="menu-title-case"  onClick={()=> this.openMenuSection(this.props.title.title)} >
                    <p className="menu-arrow">---</p>
                    <p className="menu-title">{this.props.title.title}</p>
                </div>
            )}
    }
}

export default MenuTitleComponent