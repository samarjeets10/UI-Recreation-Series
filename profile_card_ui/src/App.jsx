import React from 'react'
import './index.css'
import Card from './components/Card'

function App() {

  const style = [

    {
      profile_img: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
      background: '#FFFFFF',
      box_clr: '#F3F6FB',
      text: '#000',
      gray_text: '#B7B7B7',
      btn_text: '#FFFFFF',
      btn_bg: '#000'
    },

    {
      profile_img: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
      background: '#000000',
      box_clr: '#363636',
      text: '#FFFFFF',
      sec_text: '#FFFFFF',
      gray_text: '#B7B7B7',

      btn_text: '#000',
      btn_bg: '#FFFFFF'
    }
  ];


  return (
    <>
      <div className="wrapper">

        {style.map((elem) => {
            return <Card profile_img={elem.profile_img} background={elem.background} box_clr={elem.box_clr} text={elem.text} gray_text={elem.gray_text} btn_bg={elem.btn_bg} btn_text={elem.btn_text} />
          })
        }

      </div>
    </>
  )
}

export default App
