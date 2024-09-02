import '../assets/barra-abajo.css';

export type Prop = {
    img?: string;
    titulo?: string;
    descripcion?: string;
  };
  
  function PlaylistIzquierda({ img, titulo, descripcion }: Prop) {
    return (
      
        <div className='barra-abajo'>    
          <br />
          <br />
          {img ? (
            <img
                className="cancion"
                src={img}
                alt="Imagen"
                width={37}
                height={37}
                />
                ) : null}
                <div className='titulos-barra-abajo'>                  
                    {titulo}
                    <br></br>
                    {descripcion}                  
                </div>
        </div>           
             
     
      
    );
  }
  
  export default PlaylistIzquierda;