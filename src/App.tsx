import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Boton from './barra-izquierda'
import ListenAgainSeccion from './componentes/listen-again'
import TitulosListenAgain from './componentes/titulos-listen-again'
import TitulosRecommendedAlbums from './componentes/titulos-recommended-albums'
import RecommendedAlbums from './componentes/recommended-albums'
import TitulosSimilarToAkon from './componentes/titulos-similar-to-akon'
import SimilarToAkon from './componentes/similar-to-akon'
import Reproductor from './componentes/barra-reproductor'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='barra-arriba'>
        <a href="#">
          <Boton title='home'/>          
        </a>   
        <a href="#">
          <Boton title='tendencias'/>
        </a>
      </div>
      <TitulosListenAgain />
      <ListenAgainSeccion />
      <TitulosRecommendedAlbums />
      <RecommendedAlbums />
      <TitulosSimilarToAkon />
      <SimilarToAkon />
      <Reproductor />      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
