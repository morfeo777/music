import { ReactNode } from 'react';
import '../assets/barra-izquierda-estilos.css';

export type Prop = {
    img?: string;
    children: ReactNode;
    
}

function ElementosContainer({img, children}: Prop) {
    return(
    <article>
        {img ? (
            <>
            
                <img
                  src={img}
                  alt="Imagen"
                  width={210}
                  height={170}
                />
                
            
            
            </>
            
            ) : null}
        {children}    
                        
    </article>
    );
    
}



export default ElementosContainer;