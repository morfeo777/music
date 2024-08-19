import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Boton from './barra-izquierda'
import ListenAgainSeccion from './componentes/listen-again'
import TitulosListenAgain from './componentes/titulos-listen-again'
import TitulosQuickPicks from './componentes/titulos-quick-picks'
import QuickPicks from './componentes/quick-picks'
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
        <a href="#">
          <Boton title='lanzamientos'/>          
        </a>   
        <a href="#">
          <Boton title='nuevos artistas'/>
        </a>
      </div>
      <br />
      <TitulosListenAgain />
      <ListenAgainSeccion />
      <br />
      <TitulosQuickPicks />
      <QuickPicks />
      <br />
      <br />
      <TitulosRecommendedAlbums />
      <RecommendedAlbums />
      <br />
      <TitulosSimilarToAkon />
      <SimilarToAkon />
      <Reproductor />      
      
      
    </>
  )
}

export default App
