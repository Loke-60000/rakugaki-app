import React from "react";
import { useState } from "react";
import '../css/user_account.css';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Accountpage(){
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        setUser(JSON.parse(userStr));
      }
    }, []);
  
    const handleLogout = () => {
      localStorage.removeItem('user');
      setUser(null);
      navigate('/Phptest');
    };
    return(
        <>  
  <div className="test">
    <div className="wrapper" id="myaccount">
        <main>
        <section className="profilepicture">
            <img src="https://pbs.twimg.com/profile_banners/3289201891/1592532582/1500x500" alt="Banner" width="680" height="220" className="account-banner"/>
            <div className="profile-pic-container">
            <img src="https://pbs.twimg.com/profile_images/1561978310392963072/syAgJht9_400x400.jpg" alt="Profile Picture" width="135" height="135" className="account-profile-picture"/>
            </div>
        </section>
        <section className="profile-details">
            <nav>
            <div className="icon-frame frame-cover">
                <img src="https://assets.codepen.io/9277864/menu-more.svg" alt="More Button" width="15" height="15" className="icon" />
            </div>
            <div className="icon-frame frame-cover">
                <img src="https://assets.codepen.io/9277864/envelope.svg" alt="Send Message Button" width="16" height="16" className="icon" />
            </div>
            </nav>
            <div className="profile-info">
            <h1> {user?.first_name}   <img src="https://assets.codepen.io/9277864/badge-verified.svg" alt="Verified Badge" width="18" height="18" className="verified-badge" /></h1>
            <small>@{user?.last_name}</small>

            <div className="account-info">
                <p> {user?.user_bio}</p>
                <div className="info-container-1">
                <p><img src="https://assets.codepen.io/9277864/pin-1.svg" alt="Location Icon" width="16" height="16" className="info-icon" /> <span className="location"></span><span>Localisation</span></p>
                <p><img src="https://assets.codepen.io/9277864/hyperlink-2.svg" alt="Hyperlink Icon" width="16" height="16" className="info-icon" /> <span className="web-site"><a href="" target="_top">website.com</a></span></p>
                <p><img src="https://assets.codepen.io/9277864/calendar-3.svg" alt="Calendar Icon" width="16" height="16" className="info-icon" /> <span>Joined 'date'</span></p>
                </div>
                <div className="info-follow">
                <p><strong>'0'</strong> <span>Following</span></p>
                <p><strong>'0'</strong> <span>Followers</span></p>
                </div>
            </div>
            </div>
        </section>
        <section className="section-tweets">
            <ul className="tweets-nav">   
            </ul>
        </section>
        </main>
    </div>
  </div>
        </>
    )
}

export default Accountpage;