import React, { useState } from "react";
import '../css/Modal.css';
import { useNavigate } from 'react-router-dom';
import Register from "./register";

function Modalsignin({closeModal}){
    const navigate = useNavigate();
    return(
        <>  
            <div id="modal_login">
                <div id='modal_box_signin'>
                    <button id="CloseButton" onClick={() => closeModal(false)}>❌</button>
                    <Register/>
                    <div className='otheroption'>
                        <a href="" >
                            By clicking the Sign Up button, you agree to our
                            Terms and Condition and Policy Privacy
                        </a>
                        <br></br>
                    </div>
                </div>
            </div>
            <div id='test' onClick={() => closeModal(false)}></div>
        </>

    )
}

export default Modalsignin
