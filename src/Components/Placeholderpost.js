import React from "react";
import '../css/Placeholderpost.css';
import Spiderholder from '../assets/spider.png'
import Manthorpp from '../assets/autoportrait_dessin.png'
import Monke from '../assets/monke.jpg'

function PlaceholderPost(){
    return(
        <>
            <div className="post-wrap">
                <div className="post-header">
                    <img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/8558c6a4ab7676d414968a2de4290d46-920470121648488999.8279328/F1215D03-46F3-4682-B255-9EB24836A635" alt="" className="avator"></img>
                    <div className="post-header-info">
                    Loke <span>@loke_60000</span><span>. Jan 5
                    </span>
                    <p>I'm gonna put some dirt in your eye.</p>
                    </div>  
                </div>
                <div className="post-img-wrap">
                    <img src={Spiderholder} alt="" className="post-img"></img>
                </div>
                <div className="post-info-counts">
                    <div className="comments">
                        <svg className="feather feather-message-circle sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    <div className="comment-count">33</div>
                </div>
                <div className="likes">
                    <svg className="feather feather-heart sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        <div className="likes-count">
                            2.6k
                        </div>
                    </div>
                </div>
            </div>

            <div id="notuser" className="post-wrap">
                <div className="post-header">
                    <img src={Manthorpp} alt="" className="avator"></img>
                    <div className="post-header-info">
                    Manthor <span>@manthor34</span><span>. Jan 1
                    </span>
                    <p>Hello world.</p>
                    </div>  
                </div>
                <div className="post-img-wrap">
                    <img src="" alt="" className="post-img"></img>
                </div>
                <div className="post-info-counts">
                    <div className="comments">
                        <svg className="feather feather-message-circle sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    <div className="comment-count">1</div>
                </div>
                <div className="likes">
                    <svg className="feather feather-heart sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        <div className="likes-count">
                            42
                        </div>
                    </div>
                </div>
            </div>

            <div id="notuser" className="post-wrap">
                <div className="post-header">
                    <img src={Manthorpp} alt="" className="avator"></img>
                    <div className="post-header-info">
                    Manthor <span>@manthor34</span><span>. Dec 24
                    </span>
                    <p>mmmmmmhhhh monke</p>
                    </div>  
                </div>
                <div className="post-img-wrap">
                    <img src={Monke} alt="" className="post-img"></img>
                </div>
                <div className="post-info-counts">
                    <div className="comments">
                        <svg className="feather feather-message-circle sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    <div className="comment-count">33</div>
                </div>
                <div className="likes">
                    <svg className="feather feather-heart sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        <div className="likes-count">
                            2.6k
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlaceholderPost;