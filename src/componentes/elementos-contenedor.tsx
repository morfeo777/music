import { ReactNode } from 'react';

export type Prop = {
    img?: string;
    children: ReactNode;
    
}

function ElementosContainer({img, children}: Prop) {
    <article>
        {img ? (
            <img
            className="avatar"
            src={img}
            alt="Imagen"
            width={70}
            height={70}
            />
            ) : null}
        {children}    
                        
    </article>
}



export default ElementosContainer;