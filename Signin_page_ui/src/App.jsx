import React from 'react'
import './index.css';
import './assets/Form UI Recreation Hero.png';
import Plane from './assets/paper-plane.svg';
import Google from './assets/google_logo.svg';
// import Apple from './assets/icons8-apple-logo-100.png'
import Apple from './assets/apple-logo.svg';

function App() {

  

  return (
    <>
      <div className="main_wrapper">
        <div className="signin_wrapper">
          <div className="container">
            <div className="left_wrapper">
              <div className='text_content'>
                <div className="header">
                  <div className='image'><img src={Plane} alt="img" /></div>
                </div>
                <div className="text_section">
                  <h1>Welcome back!</h1>
                  <p>Your work, your team, your flow — all in one place</p>
                  <div className='signin_with'>
                    <div className='btn'>
                      <div>
                        <img src={Google} alt="google" />
                      </div>
                      <p>Sign In with Google</p>
                    </div>
                    <div className='btn'>
                      <div>
                        <img src={Apple} alt="apple" />
                      </div>
                      <p>Sign In with Apple</p>
                    </div>
                  </div>
                </div>
                <div className="bottom_section">
                  <p>Home</p>
                </div>
              </div>
            </div>
            <div className="right_wrapper">
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
