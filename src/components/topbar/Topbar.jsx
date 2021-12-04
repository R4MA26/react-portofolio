import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Rama.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+62 82 292 256 219</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>ramaismaya25@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    
                </div>
            </div>
        </div>
    )
}
