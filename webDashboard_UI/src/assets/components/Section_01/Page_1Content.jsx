import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

function Page_1Content({users}) {

  return (
    <div className=' h-[85vh] py-7 px-14 w-full flex items-center gap-7 '>
      <LeftContent />
      <RightContent users={users} />
    </div>
  )
}

export default Page_1Content
