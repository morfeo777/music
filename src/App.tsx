import {  useState, Dispatch, createContext} from 'react'
import Home from './componentes/home-completo'
import ElementosContainer from './componentes/elementos-contenedor.tsx';
import DetallesItem from './componentes/detalles-elementos.tsx';
import PlaylistIzquierda from './componentes/playlist-izquierda.tsx'
import './assets/barra-izquierda-estilos.css';
import './assets/sidebar.css';
import './App.css'

/* Imagenes en Servidor para hacer Pruebas

https://images2.imgbox.com/36/db/DwVzTM6J_o.png

https://images2.imgbox.com/c6/52/TMHd2xoo_o.png

https://images2.imgbox.com/8c/91/Sa9nDW0Z_o.png

https://images2.imgbox.com/d1/9b/Wb1rnJMW_o.png

https://images2.imgbox.com/dc/cf/MEu5p3iJ_o.png

https://images2.imgbox.com/29/ed/A83QF6U1_o.png

https://images2.imgbox.com/86/33/uHQM3OUV_o.png

https://images2.imgbox.com/3a/fa/zc2jEw6s_o.png

https://images2.imgbox.com/74/b8/DsvSf2rI_o.png
 */


type AudioContextType = {
  reproducir: boolean;
  audioUrl: string;
  imgUrl: string;
  titulo: string;
  artista: string;
  mostrarReproductor: boolean;
  stopReproduccion: boolean; 
  changeAudioState: (
    reproducir: boolean, 
    audioUrl: string,
    imgUrl: string,
    titulo: string,
    artista: string,
    mostrarReproductor: boolean,
    stopReproduccion: boolean 
  ) => void;
};

export const AudioContext = createContext<AudioContextType | null>(
  null
);



export default function App() {
  /*const [playlist, setPlaylist] = useState<string>('');*/
  const [home, setHome] = useState<boolean>(true);
  const [img, setImg] = useState<string>('');
  const [titulo, setTitulo] = useState<string>('');
  const [descripcion, setDescripcion] = useState<string>(''); 
  const [agregarPlaylist, setAgregarPlaylist] = useState<boolean>(false);
  const [audioReproductor, setAudioReproductor] = useState({ 
    reproducir: false, 
    audioUrl: '',
    imgUrl: '',
    titulo: '',
    artista: '',
    mostrarReproductor: false,
    stopReproduccion: true    
  });

  const changeAudioState = (
    reproducir: boolean, 
    audioUrl: string,
    imgUrl: string,
    titulo: string,
    artista: string,
    mostrarReproductor: boolean,
    stopReproduccion: boolean    
  ) => {
    setAudioReproductor({ 
      reproducir, 
      audioUrl, 
      imgUrl,
      titulo,
      artista,
      mostrarReproductor,
      stopReproduccion    
    });
  };
  
  function inicio() {
    setHome((noHome) => {
      return !noHome;
    });
  }  

  return (
    <>
      <div className='costado'>
      {agregarPlaylist? null : null}
      
        <AgregarPlaylistFormulario inicio={inicio} />       
        
        <PlaylistAgregada 
          tituloIzquierda={titulo}
          descripcionIzquierda={descripcion}
          imagenIzquierda={img}             
        />
          
        
      </div>
     {home ? 
      (
          <AudioContext.Provider
          value={{
            reproducir: audioReproductor.reproducir,
            audioUrl: audioReproductor.audioUrl,
            imgUrl: audioReproductor.imgUrl,
            titulo: audioReproductor.titulo,
            artista: audioReproductor.artista,
            mostrarReproductor: audioReproductor.mostrarReproductor,
            stopReproduccion: audioReproductor.stopReproduccion,
            changeAudioState
          }}>
              <Home />
          </AudioContext.Provider>        
      ) : 
      (<NuevaPlaylist2
        setAgregarPlaylist={setAgregarPlaylist}
        setTitulo={setTitulo}
        setDescripcion={setDescripcion}
        setImg={setImg}        
        setHome={setHome}

      />) }

           
    </>
  )
}



type MostrarFormProps = {
  inicio : () => void;
};
function AgregarPlaylistFormulario({inicio}:MostrarFormProps) {
  return(
  <>
    <h5>Nueva Playlist</h5>
    <button onClick={() => inicio()}>+ Agregar</button>
  </>
  );
}

type PlaylistAgregadaProp = {    
  tituloIzquierda : string;
  descripcionIzquierda : string;
  imagenIzquierda : string;
}; 

function PlaylistAgregada({ tituloIzquierda, descripcionIzquierda, imagenIzquierda }: PlaylistAgregadaProp) {
  return(
      <div className='elementos_grupo'>
          <PlaylistIzquierda 
                img={imagenIzquierda} 
                titulo={tituloIzquierda}
                descripcion={descripcionIzquierda}
          />           
                  
      </div>
  ); 
          
}

type NuevaPlaylistProp = {    
  setAgregarPlaylist: Dispatch<React.SetStateAction<boolean>>;
  setTitulo: Dispatch<React.SetStateAction<string>>;
  setDescripcion: Dispatch<React.SetStateAction<string>>;
  setImg: Dispatch<React.SetStateAction<string>>;
  
  setHome: Dispatch<React.SetStateAction<boolean>>;
  
};

function NuevaPlaylist2({ setAgregarPlaylist, setTitulo, setDescripcion, setImg, setHome }: NuevaPlaylistProp) {

  const [estaEscribiendo, setEstaEscribiendo] = useState<boolean>(true);
  const [imgPlaylist, setImgPlaylist] = useState<string>('');
  const [tituloPlaylist, setTituloPlaylist] = useState<string>('');
  const [descripcionPlaylist, setDescripcionPlaylist] = useState<string>('');
  
  function handleChangeImage(event: React.ChangeEvent<HTMLInputElement>) {
    setEstaEscribiendo(false);
    setImgPlaylist(event.target.value);
  }

  function handleChangeTitulo(event: React.ChangeEvent<HTMLInputElement>) {
    setEstaEscribiendo(false);
    setTituloPlaylist(event.target.value);
  }
  function handleChangeDescripcion(event: React.ChangeEvent<HTMLInputElement>) {
    setEstaEscribiendo(false);
    setDescripcionPlaylist(event.target.value);
   }  

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setAgregarPlaylist(true);
    setTitulo(tituloPlaylist);
    setDescripcion(descripcionPlaylist);
    setImg(imgPlaylist);
    setHome(true);
        
  }

  return (
    <>    
      <div className='elementos_grupo'>
          <form onSubmit={handleSubmit}>
            <div>       

            <input
              type="text"
              value={tituloPlaylist}
              onChange={handleChangeTitulo}
              placeholder="Ingresa el Titulo"
              required={true}
            />
            <br />
            <br />
            <input
              type="text"
              value={descripcionPlaylist}
              onChange={handleChangeDescripcion}
              placeholder="Ingresa una descripcion"
              required={true}
            />
            <br />
            <br />
            <input
              type="text"
              value={imgPlaylist}
              onChange={handleChangeImage}                  
              placeholder="Ingresa la URL de la  imagen"
              required={true}
            />
            <br />
            <br />
            <button type="submit" disabled={estaEscribiendo}>Agregar</button>
          </div>
          </form>
            <br />
          { <div className='elementos_grupo'>
              <ElementosContainer img={imgPlaylist}>
                 <DetallesItem cancion={tituloPlaylist} />
                 <DetallesItem content={descripcionPlaylist} />
              </ElementosContainer>            
                        
            </div>}
        
      </div>
    </>
      
      
    
  );

  


}
