/*import { useEffect, useState, Dispatch } from 'react';*/
import ElementosContainer from './elementos-contenedor.tsx';
import DetallesItem from './detalles-elementos.tsx';
import '../assets/barra-izquierda-estilos.css';
/*import {AudioBoom2} from './pedir_audioboom2.tsx';*/


function ListenAgainSeccion() {
    /*const [audio_clips, setAudioClips] = useState([]);*/
    /*const data = useState(AudioBoom());*/
    /*const { data, error, isLoaded } = AudioBoom2();*/
    /*const {error ,isLoaded ,audio_clips  } = AudioBoom2(
        "https://api.audioboom.com/audio_clips"
      );*/


    /*type LogoImage = {        
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
    };*/

    /*setAudioClips(AudioBoom());*/ 
    
    /*const { data } = AudioBoom();*/

    /*const audio_clips_boom = AudioBoom();{audio_clips.map((audio_clip: AudioClips) => {})}*/

    return(
        <>
        <div className='elementos_grupo'>
            <ElementosContainer img="https://images2.imgbox.com/36/db/DwVzTM6J_o.png">
                <DetallesItem cancion='Playlist Nane' />
                <DetallesItem content='Artist Name.68 songs' />
            </ElementosContainer>
            
            
        </div>
            

        </>
    );
}

export default ListenAgainSeccion;