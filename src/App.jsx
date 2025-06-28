import { useState } from 'react'


import './App.css'
import BarraNavega from './componetes/BarraNavega'
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './componetes/Banner'
import Skills from './componetes/Skills'
import Proyectos from './componetes/Proyectos'
import Contacto from './componetes/Contacto'
import Footer from './componetes/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BarraNavega/>
     <Banner/>
     <Skills/>
     <Proyectos />
     <Contacto />    
    <Footer/>
</>
  )
}

export default App
