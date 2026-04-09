import React from 'react'
import NavBar from './components/NavBar'
import HeroStat from './components/HeroStat'

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="main__container">
          <div>
            <NavBar />
          </div>
          <div className="hero__container">
            <div className='hero__text'>
              <h1>We spend one-third of <br /> our life on work</h1>
            </div>
            <div className='hero__features'>
              {/* Features component */}
              <HeroStat />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
