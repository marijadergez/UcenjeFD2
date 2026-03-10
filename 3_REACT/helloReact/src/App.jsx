import { useState } from 'react'
import reactLogo from './assets/react.svg'
import slika from '/vite.svg'
import lijepaSlika from './assets/slika.jpg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <img src={lijepaSlika} alt='Otok ljubavi' />
     
     <hr />
   
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={slika} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='naslov'
      style={{fontFamily: 'sans-serif'}}
      > 
      {count}
       </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          povećaj
        </button>
       
       <button onClick={()=>{
        const umanjeno = count - 1
        setCount(umanjeno)
       }}>
        smanji
       </button>

       <button onClick={()=>setCount(0)} >
        reset
       </button>



      </div>
      
    </>
  )
}

export default App
