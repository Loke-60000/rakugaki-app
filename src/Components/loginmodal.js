import React from "react";
import '../css/Modal.css';
import { useNavigate } from 'react-router-dom';
import Login from "./login";


function Modal({closeModal}){
    const navigate = useNavigate();
    return(
        <>  
            <div id="modal_login">
                <div id='modal_box'>
                    <button id="CloseButton" onClick={() => closeModal(false)}>❌</button>
                    <Login/>
                    <div className='otheroption'>
                        <a href="" >Password forgotten ?</a>
                        <br></br>
                        <a href="" >Not a member ? sign in</a>
                    </div>
                </div>
            </div>
            <div id='test' onClick={() => closeModal(false)}></div>
        </>

    )
}

export default Modal
