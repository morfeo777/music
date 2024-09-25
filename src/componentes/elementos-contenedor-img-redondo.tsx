import { ReactNode } from 'react';
import '../assets/barra-izquierda-estilos.css';

export type Prop = {
    img?: string;
    children: ReactNode;
    
}

function ElementosContainerImgRedondo({img, children}: Prop) {
    return(
    <article>
        {img ? (
            <img
            className="avatar"
            src={img}
            alt="Imagen"
            width={197}
            height={170}
            />
            ) : null}
        {children}    
                        
    </article>
    );
    
}



export default ElementosContainerImgRedondo;