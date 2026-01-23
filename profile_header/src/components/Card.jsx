import React from 'react'
import './Card.css'
import Image from '../assets/Profile-banner-bg.png';

function Card() {

  const CtaContent = [
    {
      title: "Ready for work",
      para: "Show recruters that you're ready for work."
    },
    {
      title: "Share posts",
      para: "Share latest news to get connect with others."
    },
    {
      title: "Update",
      para: "Keep your profile updated so that recruters Know you better."
    }
  ];

  const Skills = [
    {
      tag: "HTML"
    },
    {
      tag: "CSS"
    },
    {
      tag: "Dart"
    },
    {
      tag: "C++"
    },
    {
      tag: "UI Design"
    },
    {
      tag: "Figma"
    },
  ];


  return (
    <div>

      <div className="main__container">

        <div className="header_container">
          <div className="bg_banner" style={{height: '100%', width: '100%',backgroundImage: `url(${Image})`, backgroundPosition: 'center', backgroundSize: 'cover', borderRadius: "1.5rem"}}>
            <div className="icon_box">
              <i class="ri-sticky-note-add-line"></i>
            </div>
          </div>
          <div className="profile_picture">
            <img src="https://plus.unsplash.com/premium_photo-1728500899909-c888ccf5ec89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxwcm9maWxlJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" alt="img" />
          </div>
        </div>

        <div className="user_info">

          <div className="user_name">
            <h1>Emma Smith</h1>
            <section className='user_bio'>
              <p>Software Engineer</p>
            </section>
            <section className="location">
              <p>Los Angeles, California</p>
            </section>
          </div>

          <div className="user_status">
            <div className="status">
              <h4>Current role</h4>
              <i class="ri-briefcase-3-line"></i>
            </div>
            <div className="role">
              <div className="role_box">
                <h4>Software Engineer</h4>
              </div>
            </div>
          </div>

        </div>

        <div className="user_action_container">

          <div className="cta_btns">
            <button className='edit_btn btn'>Edit Profile</button>
            <button className='settings_btn btn'>Settings</button>
          </div>

          <div className="tags_section">
            <div className="skills">
              <h4>Skills</h4>
              <i class="ri-star-line"></i>
            </div>

            <div className="skills_tags">
              {
                Skills.map(function (skill, idx) {
                  return <div className='tag_box' key={idx}>
                      <p>{skill.tag}</p>
                    </div>
                })
              }
            </div>
          </div>

        </div>

        <div className="cta_containers">
          {
            CtaContent.map(function (elem, idx) {
              return <div className="content_box" key={idx}>
              <div className="text_content">
                <h2>{elem.title}</h2>
                <p>{elem.para}</p>
              </div>
              <div className="cta_box">
                <i class="ri-arrow-right-line"></i>
              </div>
            </div>
            })
          }
        </div>

      </div>
      
    </div>
  )
}

export default Card
