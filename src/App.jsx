import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Background from './Components/Background/Background'

function App() {
  let data = [
    {text1:"Dive", text2: "into"},
    {text1:"Indulge", text2:"your passions"},
    {text1:"Believe", text2:"your a hero"},
  ]
  const [herocount, sethc] = useState(0);
  const [play, setp] = useState(false);

  useEffect(() => {
    setInterval(() => {
      sethc((count) => {return count===2 ?0 :count+1})
    }, 4000)
  }, [])

  return (
    <div>
      <Background play = {play} herocount = {herocount} />
      <Navbar />
      <Hero 
        setp = {setp}
        data = {data[herocount]}
        herocount = {herocount}
        sethc = {sethc}      
        play = {play}
      />
    </div>
  )
}

export default App
