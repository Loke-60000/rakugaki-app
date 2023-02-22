import React from "react";
import NavBanner from "../Components/NavBanner";
import CarouselBanner from '../Components/Carousel';
import ToolBar from "../Components/ToolBar";
import Desktopnav from "../Components/desktopnav";
import PlaceholderPost from "../Components/Placeholderpost";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { useEffect } from "react";
import '../css/mainapp.css';



function MainApp(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <NavBanner/>

            <div className="parent">
                <BrowserView>
                <Desktopnav/>
                <div className="div1 p-3">
                </div>
                </BrowserView>
                <div className="div2">
                    <div className="pif p-2"></div>
                        <CarouselBanner className='carousel'/>
                        <PlaceholderPost className='posts'/>
                        <div className="pif p-2"></div>
                </div>
            </div> 
            <MobileView>
                <ToolBar/>
            </MobileView>

        </>
        
    )
}

export default MainApp;