import '../assets/barra-abajo.css';
import { AiFillStepBackward } from "react-icons/ai";
import { AiFillStepForward } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { IconContext } from "react-icons";

export type Prop = {
    img?: string;
    titulo?: string;
    artista?: string;
  };
  
  function BarraAbajo({ img, titulo, artista }: Prop) {
    return (
      <div className='footer'>
        <div className='barra-abajo'>
          <IconContext.Provider value={{ color: "white", className: "iconos" }}>
            <div>
              <AiFillStepBackward />
              <AiFillCaretRight />          
              <AiFillStepForward />
            </div>
          </IconContext.Provider>
          
          <div className='info-barra-abajo'>
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
                    {artista}
                  
                </div>
          </div>           
        </div>        
      </div>
      
    );
  }
  
  export default BarraAbajo;