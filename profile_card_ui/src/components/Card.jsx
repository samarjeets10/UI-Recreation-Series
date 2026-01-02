import React from 'react'
import './Card.css'

function Card() {
  return (
    <div>
      <div className="card">

        <div className="cover_image">
            <div className="profile_photo">
                <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D" alt="profile_photo" />
            </div>
        </div>

        <div className="user_handel">

            <div className="user_info">
                <h2>Roman Rouf Col.</h2>
                <p>Gym Expert</p>
            </div>
            <div className="status">
                <div className="indecator"></div>
                <p>Online</p>
            </div>

        </div>

        <div className="user_exp">
            <div className="box">
                <h2>4.5</h2>
                <p>Rating</p>
            </div>
            <div className="box">
                <h2>200</h2>
                <p>Hours</p>
            </div>
            <div className="box">
                <h2>06</h2>
                <p>Months</p>
            </div>
        </div>

        <div className="cta_section">
            <button className='btn'>Get In Touch</button>
        </div>

      </div>
    </div>
  )
}

export default Card
