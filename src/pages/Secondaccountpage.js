import React from "react";
import NavBanner from "../Components/NavBanner";
import ToolBar from "../Components/ToolBar";
import PlaceholderPost from "../Components/Placeholderpost";
import '../css/second_account.css';


function Accountpage(){
    return(
        <>
            <NavBanner/>

            <div className="user_banner_wrap" id="user_01"></div>
            <div className="user_profile_pic" id="user_profile_01"></div>
            <div className='user_info'>
                <h1>Loke</h1>
                <h2>@Loke_</h2>
                <div className="edit_button"><h3>Follow</h3></div>
                <p>'Que votre vie soit longue et vos difficultés passagères' <br> That's what she said</br></p>
                <hr></hr>
            </div>            
            <PlaceholderPost></PlaceholderPost>

            <ToolBar/>
            <div id="placeholder_void" style={{marginBottom: "20%"}}></div>
        </>
    )
}

export default Accountpage;