import ElementosContainer, { Prop } from './elementos-contenedor.tsx';
import DetallesItem from './detalles-elementos.tsx';
import '../assets/barra-izquierda-estilos.css';

function RecommendedAlbums() {

    return(
        <>
        <div className='elementos_grupo'>
            <ElementosContainer img="https://images2.imgbox.com/dc/cf/MEu5p3iJ_o.png">
                <DetallesItem cancion='Listen Again' />
                <DetallesItem content='Listen Again.Listen Again' />
            </ElementosContainer>
            <ElementosContainer img="https://images2.imgbox.com/29/ed/A83QF6U1_o.png">
                <DetallesItem cancion='Listen Again' />
                <DetallesItem content='Listen Again.Listen Again' />
            </ElementosContainer>
            <ElementosContainer img="https://images2.imgbox.com/86/33/uHQM3OUV_o.png">
                <DetallesItem cancion='Listen Again' />
                <DetallesItem content='Listen Again.Listen Again' />
            </ElementosContainer>
            <ElementosContainer img="https://images2.imgbox.com/3a/fa/zc2jEw6s_o.png">
                <DetallesItem cancion='Listen Again' />
                <DetallesItem content='Listen Again.Listen Again' />
            </ElementosContainer>
            
        </div>
            

        </>
    );
}

export default RecommendedAlbums;