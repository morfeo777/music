import { useEffect, useState, useContext  } from 'react';
import '../assets/barra-izquierda-estilos.css';
import { AudioContext } from '../App.tsx';
import QuickPicksContenedor from "./contenedor-quick-picks";
import '../assets/quick-picks.css';
import '../assets/barra-izquierda-estilos.css';

const API_URL = 'https://api.audioboom.com/audio_clips';

export default function PeticionQuickPicks() {
  const [audio_clips, setAudioClips] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState('');
  const audioContext = useContext(AudioContext);
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
            <>
            <a href="#"
            className='contenedor'
            onClick={() => {
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
            }}
            >
              <div className='contenedor'>
                <QuickPicksContenedor
                      img={audio_clip.channel.urls.logo_image.original}
                      titulo={audio_clip.title.slice(0, 14)+'...'}
                      artista={description_ab.slice(0, 21)+'...'}                        
                />
             {reproducir? (tituloContexto === audio_clip.title?
          (<div className="overlay">
            <img
                
                src= "https://images2.imgbox.com/49/02/pSDOPEuz_o.png"
                alt="Pause"
                width={77}
                height={77}
            />
            </div>) : 
            <div className="overlay">
              <img
          
                src= "https://images2.imgbox.com/df/cc/v6OqPTZp_o.png"
                alt="Play"
                width={77}
                height={77}
              />
            </div>) 
           : (
            <div className="overlay">
                        <img
                            
                            src= "https://images2.imgbox.com/df/cc/v6OqPTZp_o.png"
                            alt="Play"
                            width={77}
                            height={77}
                        />
             </div>)  }
              </div>
                
                </a>               
            </>
                                       
            );             
          })}  
          {isLoaded? null : null}
          {error? null : null}      
        </div>
        <br />
        <div className='elementos_grupo'>        
          {audio_clips.slice(4,7).map((audio_clip: AudioClip) => {   
              const description_ab = audio_clip.description ? audio_clip.description : audio_clip.title;      
          return(
            <>
            <a href="#"
            className='contenedor'
            onClick={() => {
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
            }}
            >
              <div className='contenedor'>
                <QuickPicksContenedor
                      img={audio_clip.channel.urls.logo_image.original}
                      titulo={audio_clip.title.slice(0, 14)+'...'}
                      artista={description_ab.slice(0, 21)+'...'}                        
                />
             {reproducir? (tituloContexto === audio_clip.title?
          (<div className="overlay">
            <img
                
                src= "https://images2.imgbox.com/49/02/pSDOPEuz_o.png"
                alt="Pause"
                width={77}
                height={77}
            />
            </div>) : 
            <div className="overlay">
              <img
          
                src= "https://images2.imgbox.com/df/cc/v6OqPTZp_o.png"
                alt="Play"
                width={77}
                height={77}
              />
            </div>) 
           : (
            <div className="overlay">
                        <img
                            
                            src= "https://images2.imgbox.com/df/cc/v6OqPTZp_o.png"
                            alt="Play"
                            width={77}
                            height={77}
                        />
             </div>)  }
              </div>
                
                </a>               
            </>                                     
            );             
          })}        
        </div>
        <br />
        <div className='elementos_grupo'>        
          {audio_clips.slice(8,11).map((audio_clip: AudioClip) => {   
              const description_ab = audio_clip.description ? audio_clip.description : audio_clip.title;      
          return(
            <>
            <a href="#"
            className='contenedor'
            onClick={() => {
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
            }}
            >
              <div className='contenedor'>
                <QuickPicksContenedor
                      img={audio_clip.channel.urls.logo_image.original}
                      titulo={audio_clip.title.slice(0, 14)+'...'}
                      artista={description_ab.slice(0, 21)+'...'}                        
                />
             {reproducir? (tituloContexto === audio_clip.title?
          (<div className="overlay">
            <img
                
                src= "https://images2.imgbox.com/49/02/pSDOPEuz_o.png"
                alt="Pause"
                width={77}
                height={77}
            />
            </div>) : 
            <div className="overlay">
              <img
          
                src= "https://images2.imgbox.com/df/cc/v6OqPTZp_o.png"
                alt="Play"
                width={77}
                height={77}
              />
            </div>) 
           : (
            <div className="overlay">
                        <img
                            
                            src= "https://images2.imgbox.com/df/cc/v6OqPTZp_o.png"
                            alt="Play"
                            width={77}
                            height={77}
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