import React from 'react'
import RightCard from './RightCard'

function RightContent({users}) {

  console.log(users);

  return (
    <div id="right" className='h-full w-2/3 overflow-x-auto flex flex-nowrapx gap-6'>
      {users.map((elem, index) => {
        return <RightCard img={elem.img} tag={elem.tag} intro={elem.intro} index={index + 1} />
      })}
    </div>
  )
}

export default RightContent
