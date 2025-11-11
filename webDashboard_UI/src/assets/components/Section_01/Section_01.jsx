import React from 'react'
import Navbar from './Navbar'
import Page_1Content from './Page_1Content'

function Section_01({users}) {

  return (
    <div className='w-full h-full'>
      <Navbar />
      <Page_1Content users={users} />
    </div>
  )
}

export default Section_01
