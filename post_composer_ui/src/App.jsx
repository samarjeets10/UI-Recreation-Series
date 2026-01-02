import React from 'react'
import "./index.css"
import Card from './components/Card'

function App() {


  const style = [

    {
      background: '#FFFFFF',
      text_clr: '#000',
      btn_txt : '#FFFFFF',
      btn_bg: '#000'
    },

    {
      background: '#130F0E',
      text_clr: '#FFFFFF',
      btn_txt : '#000',
      btn_bg: '#FFFFFF',
      primary_light: '#6C6C6C',
      border: '2px solid #6C6C6C',
      hover_clr: '#FFFFFF'
    },

  ];


  return (
    <>
      <div className="wrapper">
          <div className="container">
            {style.map((elem) => {
              return <Card background={elem.background} text_clr={elem.text_clr} button_bg={elem.btn_bg} button_txt={elem.btn_txt} border={elem.border} primary_light={elem.primary_light} />
            })}
          </div>
      </div>
    </>
  )
}

export default App
