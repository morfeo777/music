import ElementosContainer, { Prop } from './elementos-contenedor.tsx';
import DetallesItem from './detalles-elementos.tsx';
import '../assets/barra-izquierda-estilos.css';

function SimilarToAkon() {

    return(
        <>
        <div className='elementos_grupo'>
            <ElementosContainer img="https://images2.imgbox.com/e2/6b/9CT8HQ49_o.png">
                <DetallesItem cancion='Listen Again' />
                <DetallesItem content='452M views.77 songs' />
            </ElementosContainer>
            <ElementosContainer img="https://images2.imgbox.com/ca/53/QZQPfyvR_o.png">
                <DetallesItem cancion='Listen Again' />
                <DetallesItem content='452M views.77 songs' />
            </ElementosContainer>
            <ElementosContainer img="https://images2.imgbox.com/07/8b/slQck9Tm_o.png">
                <DetallesItem cancion='Listen Again' />
                <DetallesItem content='452M views.77 songs' />
            </ElementosContainer>
            <ElementosContainer img="https://images2.imgbox.com/9e/cc/WzZyfIr5_o.png">
                <DetallesItem cancion='Listen Again' />
                <DetallesItem content='452M views.77 songs' />
            </ElementosContainer>
            
        </div>
            

        </>
    );
}

export default SimilarToAkon;