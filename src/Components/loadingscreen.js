import React, { useEffect } from "react";

function Loadingscreen() {
  function animateloading() {
    document.getElementById("loadingscreen").style.cssText = "transform: translateX(-200vw);";
  }
  function secondanimationloading() {
    document.getElementById("loadingscreentwo").style.cssText = "transform: translateX(-200vw);";
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      animateloading();
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      secondanimationloading();
    }, 2100);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div id="loadingscreen">  
        <h1>
          <span className="loadingscreentext">ラ</span>
          <span className="loadingscreentext">ク</span>
          <span className="loadingscreentext">ガ</span>
          <span className="loadingscreentext">キ</span>
          <span className="loadingscreentext">•</span>
          <span className="loadingscreentext">•</span>
          <span className="loadingscreentext">•</span>
        </h1>
    </div>
    <div id="loadingscreentwo">
      <span></span>
    </div>
    </>

  );
}


export default Loadingscreen;
