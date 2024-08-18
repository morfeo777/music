import ElementosContainer, { Prop } from './elementos-contenedor.tsx';
import DetallesItem from './detalles-elementos.tsx';
import '../assets/barra-izquierda-estilos.css';

function ListenAgainSeccion() {

    return(
        <>
        <div className='elementos_grupo'>
            <ElementosContainer img="https://images2.imgbox.com/36/db/DwVzTM6J_o.png">
                <DetallesItem cancion='Playlist Nane' />
                <DetallesItem content='Artist Name.68 songs' />
            </ElementosContainer>
            <ElementosContainer img="https://images2.imgbox.com/c6/52/TMHd2xoo_o.png">
                <DetallesItem cancion='Song Title' />
                <DetallesItem content='Channel/Artist.540M views' />
            </ElementosContainer>
            <ElementosContainer img="https://thumbs2.imgbox.com/8c/91/Sa9nDW0Z_t.png">
                <DetallesItem cancion='Playlist Nane' />
                <DetallesItem content='Artist Name.68 songs' />
            </ElementosContainer>
            <ElementosContainer img="https://thumbs2.imgbox.com/d1/9b/Wb1rnJMW_t.png">
                <DetallesItem cancion='Playlist Nane' />
                <DetallesItem content='Artist Name.68 songs' />
            </ElementosContainer>
            
        </div>
            

        </>
    );
}

export default ListenAgainSeccion;