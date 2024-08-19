import { ReactNode } from 'react';
import '../assets/componentes.css';

type Props = {
    img: string;
    tituloSeccion?: string;
    titulo?: string;
    children?: ReactNode;
};

function Seccion({ img, tituloSeccion, titulo, children }: Props) {
    return(
        <div className='contenedor-elementos'>
          {img ? (
            <img
                className="avatar"
                src={img}
                alt="Imagen"
                width={77}
                height={77}
                />
                ) : null}
          <p>
            {tituloSeccion ? (
            <div className='titulos'>{tituloSeccion}</div>
            ) : null}
            {titulo ? (
              <h3>{titulo}</h3>
            ) : null}
          </p>
          {children}            
        </div>
    );
}


export default Seccion;