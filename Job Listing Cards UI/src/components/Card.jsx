
import React from 'react'
import './Card.css'
import {Bookmark} from 'lucide-react'

function Card({companylogo, companyName, time, post, tag1, tag2, pay, location}) {


  return (
    <div>
      <div className="card">
        <div className="top">
            <img src={companylogo} alt="Brand logo" />
            <button>Save <Bookmark size={15} /></button>
        </div>
        <div className="center">
            <h2>{companyName} <span>{time}</span></h2>
            <h3>{post}</h3>
            <div>
                <h4>{tag1}</h4>
                <h4>{tag2}</h4>
            </div>
        </div>
        <div className="bottom">
            <div>
                <h3>{pay}</h3>
                <p>{location}</p>
            </div>
            <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card

