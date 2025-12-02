import React from 'react'
import './Card.css';
import InnerCard from './InnerCard.jsx';
function Card() {
  return (
    <div>
        <div className="card">

            {/* <div className="inner-card">
                <div className="price-section">
                    <div className="tag">
                        <button>Starter</button>
                    </div>
                    <div className="price">
                        <h1>$0<span>/month</span></h1>
                    </div>
                </div>
                <div className="detail-section">
                    <p>Perfect for small Teams</p>
                    <button>Start Hiring</button>
                </div>
            </div> */}
            
            <InnerCard />

            



            <div className="card-features">
                <ul>
                    <li className='feature'>
                        <div className='check-icon'><i class="ri-check-line"></i></div>
                        <p>3 Projects</p>
                    </li>
                    <li className='feature'>
                        <div className='check-icon'><i class="ri-check-line"></i></div>
                        <p>AI Applicant Screening</p>
                    </li>
                    <li className='feature'>
                        <div className='check-icon'><i class="ri-check-line"></i></div>
                        <p>AI Recruiter</p>
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Card
