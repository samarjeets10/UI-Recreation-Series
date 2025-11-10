import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

function Page_1Content() {
  return (
    <div className='w-full py-10 flex items-center gap-8 h-[90vh] bg-amber-400 px-18 '>
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Page_1Content
