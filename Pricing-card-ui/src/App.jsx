import React from 'react'
import './index.css';
import Card from './components/Card';

function App() {

  const pricingCard = [
    {
      title: 'Starter',
      price: '$0',
      description: 'Perfect for small Teams',
      button: 'Start Hiring',
      features: [
        '3 Projects',
        'AI Applicant Screening',
        '24/7 Customer Support'
      ]
    },

    {
      priceBG: '#E7ECF6',
      titleBG: '#f1f7ff',
      title: 'PROFESIONAL',
      price: '$99',
      description: 'Perfect for Growing Teams',
      button: 'Start Hiring',
      features: [
        'Unlimited Projects',
        'AI Applicant Screening',
        'AI Recruiter',
        'Risk-Free Guarantee',
      ]
    },

    {
      title: 'ENTERPRISE',
      price: 'Custom',
      description: 'For Large Organizations',
      button: 'Contact Us',
      features: [
        'Unlimited Projects',
        'AI Applicant Screening',
        'Customer Skill Assessment',
        'Custom AI Recruiter'
      ]
    }
  ]

  return (
    <div>
      <div className='wrapper'>

        <div className="title">
          <h1>Pricing plans</h1>
          <p>Choose the right plan for your needs.</p>
        </div>

        <div className="card-container">
          { 
          pricingCard.map (function(elem, idx) {
            return <div key={idx}>
            <Card title={elem.title} titleBG={elem.titleBG} priceBG={elem.priceBG} price={elem.price} description={elem.description} button={elem.button} features={elem.features} /> </div>
          })
          }
        </div>

      </div>

    </div>
  )
}

export default App


