import React from 'react'
import './Card.css'

function Card({ profile_img,background, box_clr, text, gray_text, btn_bg, btn_text}) {
  return (
    <div>
      <div className="card" style={{background: background}}>

        <div className="cover_image">
            <div className="profile_photo">
                <img src={profile_img} alt="profile_photo" />
            </div>
        </div>

        <div className="user_handel">

            <div className="user_info">
                <h2 style={{color: text}}>Roman Rouf Col.</h2>
                <p style={{color: gray_text}}>Gym Expert</p>
            </div>
            <div className="status" style={{background: box_clr}}>
                <div className="indecator"></div>
                <p style={{color: gray_text}} >Online</p>
            </div>

        </div>

        <div className="user_exp" style={{background: box_clr}}>
            <div className="box">
                <h2 style={{color: text}}>4.5</h2>
                <p style={{color: gray_text}}>Rating</p>
            </div>
            <div className="box">
                <h2 style={{color: text}}>200</h2>
                <p style={{color: gray_text}}>Hours</p>
            </div>
            <div className="box">
                <h2 style={{color: text}}>06</h2>
                <p style={{color: gray_text}}>Months</p>
            </div>
        </div>

        <div className="cta_section">
            <button className='btn' style={{background: btn_bg, color: btn_text}}>Get In Touch</button>
        </div>

      </div>
    </div>
  )
}

export default Card
