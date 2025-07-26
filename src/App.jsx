import { ScrollTrigger, SplitText } from 'gsap/all';
import React from 'react'
import gsap from 'gsap';
import Navbar from './components/Navbar';

// Register Gsap animation plugins globally in the app
gsap.registerPlugin(ScrollTrigger, SplitText);


const App = () => {
  return (
    <main>
      <Navbar/>
    </main>
  )
}

export default App
