import React from 'react'

function RightCardContent({tag, intro, index}) {
  return (
    <div>
      <div className='absolute top-0 left-0 w-full h-full p-5 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-8 w-8 flex justify-center items-center font-semibold '>{index}</h2>
        <div>
            <p className='text-[16px] leading-5 text-white mb-5 '>{intro}</p>
            <div className='flex justify-between items-center '>
                <button className='bg-blue-600 text-white font-medium px-6 py-1 rounded-full '>{tag}</button>
                <button className='bg-blue-600 text-white font-medium px-2 py-1 rounded-full '><i class="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
