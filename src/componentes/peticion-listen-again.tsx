import { useEffect, useState, useContext } from 'react';
import ElementosContainer from './elementos-contenedor.tsx';
import DetallesItem from './detalles-elementos.tsx';
import { AudioContext } from '../App.tsx';
import '../assets/barra-izquierda-estilos.css';

const API_URL = 'https://api.audioboom.com/audio_clips';

export default function PeticionListenAgain() {
  const [audio_clips, setAudioClips] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState('');
  /*const [isPlaying, setIsPlaying] = useState(false);*/
  const audioContext = useContext(AudioContext);
  /*const [isPlaying, setIsPlaying] = useState(false);*/
  const reproducir = (audioContext?.reproducir ? true : false);
  const tituloContexto = (audioContext?.titulo ? audioContext.titulo : "Listen Again");


  /*const ellipsis = (str: string, num: number = str.length, ellipsisStr = "...") =>
    str.length >= num
      ? str.slice(0, num >= ellipsisStr.length ? num - ellipsisStr.length : num) +
        ellipsisStr
      : str;*/


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

/*function handleClick() {
  const nextIsPlaying = !reproducir;
  setIsPlaying(nextIsPlaying);
  if (!isPlaying) {
    setIsPlaying(true);        
    audioRef.current?.play();
    audioContext?.changeAudioState(
      true, 
      audioUrl,
      imgUrl,
      tituloInterno,
      artistaInterno,
      true, 
      false
    );
    
  } else {
    setIsPlaying(false);        
    audioRef.current?.pause();
    audioContext?.changeAudioState(
      false, 
      audioUrl,
      imgUrl,
      tituloInterno,
      artistaInterno,
      true, 
      false
    );
  }
}*/

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
      {audio_clips.slice(0,4).map((audio_clip: AudioClip) => {   
           const description_ab = audio_clip.description ? audio_clip.description : audio_clip.title;      
       return(
        <>
        
         <a href="#" className='contenedor'
            onClick={
              () => {
                if(reproducir) {
                  if(tituloContexto === audio_clip.title){
                    audioContext?.changeAudioState(
                    false, 
                    audio_clip.urls.high_mp3,
                    audio_clip.channel.urls.logo_image.original,
                    audio_clip.title,
                    description_ab,
                    true, 
                    false
                  );
                  } else {
                    audioContext?.changeAudioState(
                      true, 
                      audio_clip.urls.high_mp3,
                      audio_clip.channel.urls.logo_image.original,
                      audio_clip.title,
                      description_ab,
                      true, 
                      false
                    );
                  }
                  
                } else {
                  audioContext?.changeAudioState(
                true, 
                audio_clip.urls.high_mp3,
                audio_clip.channel.urls.logo_image.original,
                audio_clip.title,
                description_ab,
                true, 
                false
              );
                }
              
                    
              

              {isLoaded? null : null}
              {error? null : null}
            }}
        >
          <div className='contenedor'>
            <ElementosContainer img={audio_clip.channel.urls.logo_image.original}>
              <DetallesItem cancion={audio_clip.title.slice(0, 14)+'...'} />              
              <DetallesItem content={description_ab.slice(0, 21)+'...'} /> 
            </ElementosContainer>
          {reproducir? (tituloContexto === audio_clip.title?
          (<div className="overlay">
            <img
                
                src= "https://images2.imgbox.com/49/02/pSDOPEuz_o.png"
                alt="Pause"
                width={170}
                height={140}
            />
            </div>) : 
            <div className="overlay">
              <img
          
                src= "https://images2.imgbox.com/df/cc/v6OqPTZp_o.png"
                alt="Play"
                width={170}
                height={140}
              />
            </div>) 
           : (
            <div className="overlay">
                        <img
                            
                            src= "https://images2.imgbox.com/df/cc/v6OqPTZp_o.png"
                            alt="Play"
                            width={170}
                            height={140}
                        />
             </div>)  }
        </div>
                   
        </a>
        
        </>            
        );
             
      })}        
      </div>
    </>
  );
}