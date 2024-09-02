import { FormEventHandler, useState, Dispatch } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Reproductor from './componentes/barra-reproductor'
import Home from './componentes/home-completo'
import ElementosContainer, { Prop } from './componentes/elementos-contenedor.tsx';
import DetallesItem from './componentes/detalles-elementos.tsx';
import PlaylistIzquierda from './componentes/playlist-izquierda.tsx'
import './assets/barra-izquierda-estilos.css';
import './assets/sidebar.css';
import './App.css'

/* Imagenes en Servidor para hacer Pruebas

https://images2.imgbox.com/36/db/DwVzTM6J_o.png

https://images2.imgbox.com/c6/52/TMHd2xoo_o.png[/IMG][/URL]

https://images2.imgbox.com/8c/91/Sa9nDW0Z_o.png

https://images2.imgbox.com/d1/9b/Wb1rnJMW_o.png

https://images2.imgbox.com/dc/cf/MEu5p3iJ_o.png

https://images2.imgbox.com/29/ed/A83QF6U1_o.png

https://images2.imgbox.com/86/33/uHQM3OUV_o.png

https://images2.imgbox.com/3a/fa/zc2jEw6s_o.png

https://images2.imgbox.com/74/b8/DsvSf2rI_o.png
 */
export default function App() {
  const [playlist, setPlaylist] = useState<string>('');
  const [home, setHome] = useState<boolean>(true);
  const [img, setImg] = useState<string>('');
  const [titulo, setTitulo] = useState<string>('');
  const [descripcion, setDescripcion] = useState<string>(''); 
  const [agregarPlaylist, setAgregarPlaylist] = useState<boolean>(false);

  function inicio() {
    setHome((noHome) => {
      return !noHome;
    });
  }  

  return (
    <>
      <div className='costado'>

        <AgregarPlaylistFormulario inicio={inicio} />       
        
        <PlaylistAgregada 
          tituloIzquierda={titulo}
          descripcionIzquierda={descripcion}
          imagenIzquierda={img}             
        />
          
        
      </div>
     {home ? 
      (<Home />) : 
      (<NuevaPlaylist2
        setAgregarPlaylist={setAgregarPlaylist}
        setTitulo={setTitulo}
        setDescripcion={setDescripcion}
        setImg={setImg}        
        setHome={setHome}

      />) }

      <Reproductor />      
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

  
function NuevaPlaylist({ setAgregarPlaylist, setTitulo, setDescripcion, setImg }: NuevaPlaylistProp) {

  const [estaEscribiendo, setEstaEscribiendo] = useState<boolean>(true);
  const [img, setImgPlaylist] = useState<string>('');
  const [titulo, setTituloPlaylist] = useState<string>('');
  const [descripcion, setDescripcionPlaylist] = useState<string>(''); 
  function handleSubmit() {
    setAgregarPlaylist(true);
    setTitulo(titulo);
    setDescripcion(descripcion);
    setImg(img);    
  }

  return (
    <>    
      <div>
        <FormularioNuevaPlaylist 
          setEstaEscribiendo={setEstaEscribiendo}
          setImg={setImgPlaylist}
          setTitulo={setTituloPlaylist}
          setDescripcion={setDescripcionPlaylist}
          handleSubmit={handleSubmit}
        />
        
        {estaEscribiendo ? (
          <ResultadoDerecha 
          tituloDerecha={titulo}
          descripcionDerecha={descripcion}
          imagen={img}
         />) : null}
        
      </div>
    </>
      
      
    
  );

  type FormularioNuevaPlaylistProp = {    
    setEstaEscribiendo: Dispatch<React.SetStateAction<boolean>>;
    setTitulo: Dispatch<React.SetStateAction<string>>;
    setDescripcion: Dispatch<React.SetStateAction<string>>;
    setImg: Dispatch<React.SetStateAction<string>>;
    handleSubmit: () => void;
  };
  
  function FormularioNuevaPlaylist({ setEstaEscribiendo, setTitulo, setDescripcion, setImg, handleSubmit }: FormularioNuevaPlaylistProp) {
    
    function handleChangeImage(event: React.ChangeEvent<HTMLInputElement>) {
      /*setEstaEscribiendo(true);*/
      setImg(event.target.value);
    }
  
    function handleChangeTitulo(event: React.ChangeEvent<HTMLInputElement>) {
      /*setEstaEscribiendo(true);*/
      setTitulo(event.target.value);
    }
    function handleChangeDescripcion(event: React.ChangeEvent<HTMLInputElement>) {
      /*setEstaEscribiendo(true);*/
      setDescripcion(event.target.value);
    }
    
    function handleSubmitForm(event: React.FormEvent) {
      event.preventDefault();
      () => handleSubmit()      
    }

    return(
      <form onSubmit={handleSubmitForm}>
        <div>       

        <input
          type="text"
          value={titulo}
          onChange={handleChangeTitulo}
          placeholder="Ingresa el Titulo"
          required={true}
        />
        
        <input
          type="text"
          value={descripcion}
          onChange={handleChangeDescripcion}
          placeholder="Ingresa una descripcion"
          required={true}
        />
        <input
          type="text"
          value={img}
          onChange={handleChangeImage}                  
          placeholder="Ingresa la URL de la  imagen"
          required={true}
        />
        <button type="submit" disabled={estaEscribiendo}>Agregar</button>
      </div>
      </form>
    );
  }


  type ResultadoDerechaProp = {    
    tituloDerecha : string;
    descripcionDerecha : string;
    imagen : string;
  }; 

  function ResultadoDerecha({ tituloDerecha, descripcionDerecha, imagen }: ResultadoDerechaProp) {
    return(
        <div className='elementos_grupo'>
            <ElementosContainer img={imagen}>
              <DetallesItem cancion={tituloDerecha} />
              <DetallesItem content={descripcionDerecha} />
            </ElementosContainer>            
                    
        </div>
    ); 
            
  }

}

}
