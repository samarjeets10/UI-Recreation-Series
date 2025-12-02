import React from 'react'
import './index.css';
import Card from './components/Card';

function App() {
  return (
    <div>
      <div className='wrapper'>

        <div className="title">
          <h1>Pricing plans</h1>
          <p>Choose the right plan for your needs.</p>
        </div>

        <div className="card-container">
          <Card />
          <Card />
          <Card />
        </div>

      </div>

    </div>
  )
}

export default App


