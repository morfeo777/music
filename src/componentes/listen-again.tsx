import ElementosContainer, { Prop } from './elementos-contenedor.tsx';
import DetallesItem from './detalles-elementos.tsx';

function ListenAgainSeccion() {
    return(
        <>
            <ElementosContainer img="https://i.imgur.com/qp4mbtj.jpeg">
                <DetallesItem cancion='Playlist' />
                <DetallesItem content='playlist.song' />
            </ElementosContainer>

        </>
    );
}

export default ListenAgainSeccion;