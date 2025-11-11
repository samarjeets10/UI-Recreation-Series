import React from 'react'
import RightCardContent from './RightCardContent'

function RightCard({img, intro, tag, index}) {
  return (
    <div className='h-full w-65 shrink-0 rounded-4xl overflow-hidden relative '>
      <img className='h-full w-full object-cover' src={img} alt="image" />
      <RightCardContent tag={tag} intro={intro} index={index} />
    </div>
  )
}

export default RightCard
