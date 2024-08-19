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
            <div>
            <a href="#">
            <img
                className="cancion"
                src= "https://images2.imgbox.com/92/9f/dS2MnAy5_o.png"
                alt="Retroceder"
                width={37}
                height={37}
                />
            </a>
            <a href="#">
            <img
                className="cancion"
                src= "https://images2.imgbox.com/df/cc/v6OqPTZp_o.png"
                alt="Imagen"
                width={37}
                height={37}
                />
            </a>
            <a href="#">
            <img
                className="cancion"
                src= "https://images2.imgbox.com/c0/fd/xymqnuc1_o.png"
                alt="Imagen"
                width={37}
                height={37}
                />
            </a>
            </div>  
          
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
                    <br></br>
                    {artista}                  
                </div>
          </div>           
        </div>        
      </div>
      
    );
  }
  
  export default BarraAbajo;