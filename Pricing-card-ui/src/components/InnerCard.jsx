import React from 'react'
import './InnerCard.css';

function InnerCard() {
  return (
    <div>
        <div className="inner-card">
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
        </div>
    </div>
  )
}

export default InnerCard
