import { useEffect, useState } from 'react';
import ElementosContainer from './elementos-contenedor.tsx';
import DetallesItem from './detalles-elementos.tsx';
import '../assets/barra-izquierda-estilos.css';

import QuickPicksContenedor, {Prop} from "./contenedor-quick-picks";
import '../assets/quick-picks.css';

const API_URL = 'https://api.audioboom.com/audio_clips';

export default function PeticionQuickPicks() {
  const [audio_clips, setAudioClips] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState('');


  const ellipsis = (str: string, num: number = str.length, ellipsisStr = "...") =>
    str.length >= num
      ? str.slice(0, num >= ellipsisStr.length ? num - ellipsisStr.length : num) +
        ellipsisStr
      : str;


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

type AudioClip = {
  title: string;
  description: string;        
  channel: Channel;
  urls: Urls;
};



  useEffect(() => {
    setIsLoaded(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setAudioClips(data.body.audio_clips);
        setIsLoaded(false);
      })
      .catch(() => {
        setError('Hubo un error');
      });
  }, []);

 
  return (
    <>
        <div className='elementos_grupo'>        
          {audio_clips.slice(0,3).map((audio_clip: AudioClip) => {   
              const description_ab = audio_clip.description ? audio_clip.description : audio_clip.title;      
          return(
                  <QuickPicksContenedor
                  img={audio_clip.channel.urls.logo_image.original}
                  titulo={audio_clip.title.slice(0, 14)+'...'}
                  artista={description_ab.slice(0, 21)+'...'}                        
              />                      
            );             
          })}        
        </div>
        <br />
        <div className='elementos_grupo'>        
          {audio_clips.slice(4,7).map((audio_clip: AudioClip) => {   
              const description_ab = audio_clip.description ? audio_clip.description : audio_clip.title;      
          return(
                  <QuickPicksContenedor
                  img={audio_clip.channel.urls.logo_image.original}
                  titulo={audio_clip.title.slice(0, 14)+'...'}
                  artista={description_ab.slice(0, 21)+'...'}                        
              />                      
            );             
          })}        
        </div>
        <br />
        <div className='elementos_grupo'>        
          {audio_clips.slice(8,11).map((audio_clip: AudioClip) => {   
              const description_ab = audio_clip.description ? audio_clip.description : audio_clip.title;      
          return(
                  <QuickPicksContenedor
                  img={audio_clip.channel.urls.logo_image.original}
                  titulo={audio_clip.title.slice(0, 14)+'...'}
                  artista={description_ab.slice(0, 21)+'...'}                        
              />                      
            );             
          })}        
        </div>
    </>
  );
}