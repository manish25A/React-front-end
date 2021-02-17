import React, {Component} from 'react'
import NewFooter from "./NewFooter";

import "./Myfooter.css"

class Footer extends Component{
    render(){
        return(
            <div className="footerBackground">
                <NewFooter/>
            </div>
        )
    }
}

export default Footer