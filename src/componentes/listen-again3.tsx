import { useEffect, useState, Dispatch } from 'react';
import ElementosContainer, { Prop } from './elementos-contenedor.tsx';
import DetallesItem from './detalles-elementos.tsx';
import '../assets/barra-izquierda-estilos.css';
import {AudioBoom2} from './pedir_audioboom2.tsx';

const API_URL = 'https://rickandmortyapi.com/api/character?page=1';


export default function ListenAgainSeccion() {       

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

    const [audio_clips, setAudioClips] = useState(Array<AudioClips>);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState('');

    /*const [personajes, setPersonajes] = useState(Array<Personaje>);*/

    useEffect(() => {
        setIsLoaded(true);
        fetch(API_URL)
          .then((res) => res.json())
          .then((data) => {
            setAudioClips(data.results);
            setIsLoaded(false);
          })
          .catch(() => {
            setError('Hubo un error');
          });
      }, []);

    

    return(
        <>
        <div className='elementos_grupo'>
            <ElementosContainer img="https://images2.imgbox.com/36/db/DwVzTM6J_o.png">
                <DetallesItem cancion='Playlist Nane' />
                <DetallesItem content='Artist Name.68 songs' />
            </ElementosContainer>
            {audio_clips.map((audio_clip: AudioClips) => {})}
            
        </div>
            

        </>
    );
}

/*export default ListenAgainSeccion;*/