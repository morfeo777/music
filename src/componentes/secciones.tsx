import { ReactNode } from 'react';

type Props = {
    img: string;
    tituloSeccion?: string;
    titulo?: string;
    children?: ReactNode;
};

function Seccion({ img, tituloSeccion, titulo, children }: Props) {
    return(
        <div>
          {img ? (
            <img
                className="avatar"
                src={img}
                alt="Imagen"
                width={21}
                height={21}
                />
                ) : null}
          {tituloSeccion ? (
            <h4>{tituloSeccion}</h4>
          ) : null}
          {titulo ? (
            <h3>{titulo}</h3>
          ) : null}
          {children}            
        </div>
    );
}


export default Seccion;