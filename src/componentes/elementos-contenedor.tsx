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
            <div className='contenedor'>
                <img
                  src={img}
                  alt="Imagen"
                  width={210}
                  height={170}
                />
                <div className="overlay">
                        <img
                            
                            src= "https://images2.imgbox.com/df/cc/v6OqPTZp_o.png"
                            alt="Play"
                            width={170}
                            height={140}
                        />
                </div>
            </div>
            
            </>
            
            ) : null}
        {children}    
                        
    </article>
    );
    
}



export default ElementosContainer;