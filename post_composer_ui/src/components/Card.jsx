import React from 'react'
import { useRef } from "react";
import "./Card.css"
  

function Card({background, text_clr, button_bg, button_txt, border}) {

    console.log(background);

     const textareaRef = useRef(null);

    const handleInput = () => {
        const el = textareaRef.current;
        el.style.height = "auto";
        el.style.height = `${el.scrollHeight}px`;
    };

  return (
    <div>
      <div className="card" style={{background}}>
        <div className="user_handel">

            <div className="profile_info">
                <div className="profile_image">
                    <img src="https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />
                </div>
                <div className="user_name">
                    <h3 style={{color: text_clr}}>Zlata Dobrica</h3>
                    <p>@zlata.xoxo</p>
                </div>
            </div>

            <div className="close_icon">
                <i class="ri-close-line" style={{color: text_clr}}></i>
            </div>

        </div>

        <div className="post_content" style={{borderBottom: border}}>
            <textarea  ref={textareaRef} rows={1} onInput={handleInput} placeholder='Tell others about yourself...' style={{color: text_clr}} ></textarea>
        </div>

        <div className="cta_section">
            <div className="icons_container">
                <i class="ri-mic-line"></i>
                <i class="ri-video-on-ai-fill"></i>
                <i class="ri-attachment-2"></i>
                <i class="ri-more-2-fill"></i>
            </div>

            <div className="btn">
                <button className='publish_btn' style={{background: button_bg, color: button_txt}}>Publish</button>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Card
