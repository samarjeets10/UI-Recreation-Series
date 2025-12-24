import React from 'react'
import './index.css'

function App() {
  return (
    <>
      <div className='main-wrapper'>
        <nav>
          <div className="nav-bar">
            <div className='logo'>
              <p>PUREM<br />ODA</p>
            </div>

            <div className="menu">
              <ul>
                <li>WOMENSWEAR</li>
                <li>MENSWEAR</li>
                <li>KIDS</li>
                <li>SALE</li>
                <li>DISCOVER</li>
              </ul>
            </div>

            <div className="search_media">
              <div className="search-bar">
                <i class="ri-search-line"></i>
                <input type="text" placeholder='Search' />
              </div>
              <i class="ri-heart-3-line"></i>
              <i class="ri-mail-unread-line"></i>
            </div>
          </div>
        </nav>


        <section className="hero">

          <div className="hero-left">
            <div className="hero_title_box">

              <div className='top'>
                <h1>FOR <span><i class="ri-arrow-right-long-line"></i></span> <br />
                 EVERYONE BUT <br />
                 NOTANYONE
                </h1>
              </div>
              <div className="bottom">
                <p>We establish personal relationship with our boutiques, to make sure each is vetted for a stress-free shopping experience</p>
              </div>

            </div>
          </div>

          <div className="hero_right">

          </div>

        </section>
      </div>
    </>
  )
}

export default App
