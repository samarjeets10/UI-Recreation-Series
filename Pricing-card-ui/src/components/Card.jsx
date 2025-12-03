import React from 'react'
import './Card.css';
function Card( {title, price, description, button, features, priceBG, titleBG} ) {
  return (
    <div>
        <div className="card">
            <div className="inner-card">
                <div className="price-section" style={{background: priceBG || '#EEEEEE'}}>
                    <div className="tag">
                        <button style={{background: titleBG || '#FFF'}}>{title}</button>
                    </div>
                    <div className="price">
                        <h1>
                            {price}
                            {price !== 'Custom' && <span>/month</span>}
                        </h1>
                    </div>
                </div>
                <div className="detail-section">
                    <p>{description}</p>
                    <button>{button}</button>
                </div>
            </div>
        
            <div className="card-features">
                <ul>
                    {features.map(function (features, key) {
                        return <li className='feature' key={key}>
                        <div className='check-icon'><i class="ri-check-line"></i></div>
                        <p>{features}</p>
                    </li>
                    })}
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Card
