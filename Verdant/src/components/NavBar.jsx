import React from 'react'

function NavBar() {
  return (
    <div>
      <nav className="nav__container">
            <div className="logo__box">
                <h1>Verdant</h1>
            </div>
            <div className="nav__bar">
                <ul className='nav__list'>
                <li><a href="#">Service</a></li>
                <li><a href="#">Why us</a></li>
                <li><a href="#">Testimonial</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">About</a></li>
                </ul>
            </div>
            <div className="cta__container">
                <button>Login</button>
            </div>
        </nav>
    </div>
  )
}

export default NavBar
