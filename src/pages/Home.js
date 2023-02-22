
import '../custom.scss'
import React, {useEffect } from "react";
import { useState } from 'react';
// import video from '../assets/video_banner.webm';
import '../css/Welcome.css';
import '../css/Modal.css';
import Modal from '../Components/loginmodal';
import Modalsignin from '../Components/signinmodal';
import Footer from '../Components/Footer';
import loadingscreen from '../Components/loadingscreen';
import Loadingscreen from '../Components/loadingscreen';


window.onload = function() {bannerload()};
function bannerload(){
  document.getElementById("slide").style.height = "100vh";
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("slide").style.margin = "-50vh auto";
    document.getElementById("slide").style.width = "100vw";
    document.getElementById("slide").style.filter = "blur(2px)";
  } else {
    document.getElementById("slide").style.height = "100vh";
    document.getElementById("slide").style.margin = "0";
    document.getElementById("slide").style.filter = "blur(0px)";
  }
}



function Welcome() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [openModal, setOpenModal] = useState(false);
  const [openSigninModal, setOpenSigninModal] = useState(false);
  useEffect(() => {
    document.body.style.overflow = openModal ? "hidden" : "scroll";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [openModal]);
  useEffect(() => {
    window.scrollTo(0, 0);
    // set the overflow property of body to "hidden" initially
    document.body.style.overflow = "hidden";

    // after 3 seconds, set the overflow property back to "scroll"
    const timeoutId = setTimeout(() => {
      document.body.style.overflow = "scroll";
    }, 3000);
    // return a cleanup function to clear the timeout
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <Loadingscreen/>
      <div id='bannerspace'></div>
      <div className="slide" id='slide'>
        <div id='slide_one'></div>
        <div id='slide_two'></div>
        <div id='slide_three'></div>
        <div id='slide_four'></div>
        <div id='slide_five'></div>
      </div>
      <div id='title_outside'>
        <p>RAKUGAKI</p>
        <h1>ラク<br/>ガキ</h1>      
        <div id='buttons'>
          <button type="button" className="btn btn-primary m-2" id='button_signin' data-toggle="button" aria-pressed="false" autoComplete="off" onClick={() => setOpenSigninModal(true)}>
              sign in
            </button>
            <button type="button" className="btn btn-primary m-2" id='button_login' data-toggle="button" aria-pressed="false" autoComplete="off" onClick={() => setOpenModal(true)}>
              log in
            </button>
        </div>
      </div>


      {openModal && <Modal closeModal={setOpenModal}/>}
      {openSigninModal && <Modalsignin closeModal={setOpenSigninModal} />}

      <Footer/>
    </>

  );
}

export default Welcome;
