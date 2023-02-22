import React from "react";
import "../css/ToolBar.css";
import home from "../assets/home.svg";
import newpost from "../assets/NewPost.svg";
import search from "../assets/search.svg";
import notif from "../assets/notificon.svg";
import ProfilePic from '../assets/LOKE.PNG';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



function ToolBar(){
    return(
        <>
            <div className="Tools">
                <Link id="link" to="/MainApp">
                    <button><img id="icon" src={home}></img></button>
                </Link>
                <Link id="link" to="/MainApp">
                    <button><img id="icon" src={search}></img></button>
                </Link>
                <Link id="link" to="/Rakugakidraw">
                    <button className="upload"><img id="icon" src={newpost}></img></button>
                </Link>
                <Link id="link" to="/MainApp">
                    <button ><img id="icon" src={notif}></img></button>
                </Link>
                <Link to="/Accountpage">
                    <button><img src={ProfilePic} id='profile'></img></button>
                </Link>
            </div>
        </>
    )
}

export default ToolBar;