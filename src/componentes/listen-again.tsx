import ElementosContainer, { Prop } from './elementos-contenedor.tsx';
import DetallesItem from './detalles-elementos.tsx';
import '../assets/barra-izquierda-estilos.css';
import AudioBoom from './pedir_audioboom.tsx';

function ListenAgainSeccion() {

    type LogoImage = {        
        original: string        
    };
    
    type ChannelUrls = {        
        detail: string;
        logo_image: LogoImage;
    };

    type Channel = {
        id: string;
        title: string;
        urls: ChannelUrls;
    };

    type Urls = {
        detail: string;
        high_mp3: string;
    };

    type AudioClips = {
        title: string;
        description: string;        
        channel: Channel;
        urls: Urls;
    };

    const audio_clips = AudioBoom();

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
            <ElementosContainer img="https://images2.imgbox.com/8c/91/Sa9nDW0Z_o.png">
                <DetallesItem cancion='Playlist Nane' />
                <DetallesItem content='Artist Name.68 songs' />
            </ElementosContainer>
            <ElementosContainer img="https://images2.imgbox.com/d1/9b/Wb1rnJMW_o.png">
                <DetallesItem cancion='Playlist Nane' />
                <DetallesItem content='Artist Name.68 songs' />
            </ElementosContainer>
            
        </div>
            

        </>
    );
}

export default ListenAgainSeccion;