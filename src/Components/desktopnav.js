import React from "react";
import "../css/desktopnav.css";
import home from "../assets/home.svg";
import newpost from "../assets/NewPost.svg";
import search from "../assets/search.svg";
import notif from "../assets/notificon.svg";
import ProfilePic from '../assets/LOKE.PNG';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Desktopnav(){
    return(
        <>
            <div className="desktopnav">
                <Link id="link" to="/MainApp">
                    <button><img id="icon_bis" src={home}></img></button>
                </Link>
                <Link id="link" to="/MainApp">
                    <button><img id="icon_bis" src={home}></img></button>
                </Link>
                <Link id="link" to="/MainApp">
                    <button><img id="icon_bis" src={home}></img></button>
                </Link>
                <Link id="link" to="/MainApp">
                    <button><img id="icon_bis" src={home}></img></button>
                </Link>
                <Link id="link" to="/MainApp">
                    <button><img id="icon_bis" src={home}></img></button>
                </Link>
            </div>
        </>
    )
}

export default Desktopnav;