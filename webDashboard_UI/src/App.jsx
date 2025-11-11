import React from 'react'
import Section_01 from "./assets/components/Section_01/Section_01.jsx"
import Section_02 from './assets/components/Section_02/Section_02'
function App() {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1976',
      intro: 'Now is the winter of our discontent Made glorious summer by this sun of YorkAnd all the clouds that lourd upon our house In the deep bosom of the ocean buried.',
      tag: 'Satisfied',
    },

    {
      img: 'https://plus.unsplash.com/premium_photo-1693000697560-a3f90545c792?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600',
      intro: 'At that moment he had a thought that hed never imagine hed consider. "I could just cheat, he thought, "and that would solve the problem.',
      tag: 'UnderServed',
    },

    {
      img: 'https://images.unsplash.com/photo-1580998510397-f5643998fc69?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387',
      intro: 'Shy sparse tasteless miniature astonishing mango prickly drab coat. Round gray pizza. Cagey warm defeated adorable oxygen.',
      tag: 'UnderBanked',
    },

    {
      img: 'https://images.unsplash.com/photo-1636626030063-c74f79c6398a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387',
      intro: 'Crashing beefy fast freezing old glamorous future garage. Powerful belligerent glamorous gas.',
      tag: 'UnderBanked',
    },

  ]

  return (
    <div>
      <Section_01 users={users} />
    </div>
  )
}

export default App

