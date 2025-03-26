// import { useState } from 'react'
// import reactLogo from './src/assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import LearnMoreButtonComponent from './components/learnMoreButtonComponent'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders:opsz,wght@10..72,100..900&display=swap" rel="stylesheet"></link>
      <div className="card">
        <div className='BGColor__Orange haveTopEdgesRounded'> {/*style={{borderRadius:".5rem .5rem 0 0"}}*/}
          <img src="images\icon-sedans.svg" alt="" />
          <h2>Sedans</h2>
          <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip. </p>
          <LearnMoreButtonComponent color="Orange"/>
  </div>
  
        <div className='BGColor__Darkcyan'>
          <img src="images\icon-suvs.svg" alt="" />
          <h2>SUVs</h2>
          <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
            and off-road adventures.</p>
            <LearnMoreButtonComponent color="Darkcyan"/>
        </div>
        <div className='BGColor__VeryDarkCyan haveBottomEdgesRounded' >    {/*style={{borderRadius:"0 0 .5rem .5rem"}}*/}
          <img src="images\icon-luxury.svg" alt="" />
        <h2>Luxury</h2>
        <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
            rental and arrive in style.</p>
          <LearnMoreButtonComponent color='VeryDarkCyan' />
          
   </div> 
  </div>
  <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>
    </>
  )
}

export default App
