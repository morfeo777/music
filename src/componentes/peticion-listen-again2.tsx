import { useEffect, useState, useContext, useRef } from 'react';
import ElementosContainer, { Prop } from './elementos-contenedor.tsx';
import DetallesItem from './detalles-elementos.tsx';
import { AudioContext } from '../App.tsx';
import '../assets/barra-izquierda-estilos.css';

const API_URL = 'https://api.audioboom.com/audio_clips';

export default function PeticionListenAgain2() {
  const [audio_clips, setAudioClips] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState('');
  const audioContext = useContext(AudioContext);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const mostrarReproductor = audioContext?.reproducir;


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

function handleClick() {
  const nextIsPlaying = !isPlaying;
  setIsPlaying(nextIsPlaying);
  if (!isPlaying) {
    setIsPlaying(true);
    setIsPaused(false);
    audioRef.current?.play();
  } else {
    setIsPlaying(false);
    setIsPaused(true);
    audioRef.current?.pause();
  }
}

function reset() {
  if (audioRef.current) {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);    
  }
}

function closeClick() {      
  if (audioRef.current) {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
    audioContext?.changeAudioState(
      false, 
      audioContext.audioUrl,
      audioContext.imgUrl,
      audioContext.titulo,
      audioContext.artista
    );
    
  }
}

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
            onClick={handleClick
              /*() => {
              alert(audio_clip.urls.high_mp3)
              audioContext?.changeAudioState(
                true, 
                audio_clip.urls.high_mp3,
                audio_clip.channel.urls.logo_image.original,
                audio_clip.title,
                description_ab
              );
              handleClick;
            }*/}
        >
          <ElementosContainer img={audio_clip.channel.urls.logo_image.original}>
              <DetallesItem cancion={audio_clip.title.slice(0, 14)+'...'} />              
              <DetallesItem content={description_ab.slice(0, 21)+'...'} /> 
          </ElementosContainer>          
        </a>
        {mostrarReproductor?
          
          <>
          if (audio_clip.title === audioContext.titulo) {
                  <div className='footer'>
              <div className='barra-abajo'>          
                  <div>
                  <a href="#">
                  <img
                      className="cancion"
                      src= "https://images2.imgbox.com/92/9f/dS2MnAy5_o.png"
                      alt="Retroceder"
                      width={37}
                      height={37}
                      />
                  </a>
                  {isPlaying ? 
                    (
                    <a href="#"  onClick={handleClick}>
                          <img
                            className="cancion"
                            src= "https://images2.imgbox.com/49/02/pSDOPEuz_o.png"
                            alt="Pause"
                            width={37}
                            height={37}
                          />
                      </a>)
                      
                  
                  : 
                      <a href="#"  onClick={handleClick}>
                        <img
                          className="cancion"
                          src= "https://images2.imgbox.com/df/cc/v6OqPTZp_o.png"
                          alt="Play"
                          width={37}
                          height={37}
                        />
                      </a>
                  }
                
                  <a href="#">
                  <img
                      className="cancion"
                      src= "https://images2.imgbox.com/c0/fd/xymqnuc1_o.png"
                      alt="Imagen"
                      width={37}
                      height={37}
                      />
                  </a>
                  
                  <a href="#" onClick={reset}>
                      <img
                          className="cancion"
                          src= "https://images2.imgbox.com/bb/28/hnGwsni3_o.png"
                          alt="stop"
                          width={34}
                          height={34}
                          />
                      </a>       
                  
                      
                  <audio key={audio_clip.urls.high_mp3} ref={audioRef}>
                    <source src={audio_clip.urls.high_mp3} type="audio/mpeg" />
                  </audio>
                  </div>  
                
                <div className='info-barra-abajo'>
                {audio_clip.channel.urls.logo_image.original ? (
                  <img
                      className="cancion"
                      src={audio_clip.channel.urls.logo_image.original}
                      alt="Imagen"
                      width={37}
                      height={37}
                      />
                      ) : null}
                      <div className='titulos-barra-abajo'>                  
                          {audio_clip.title.slice(0, 14)+'...'}
                          <br></br>
                          {description_ab.slice(0, 21)+'...'}                  
                      </div>
                </div> 
                <a href="#" onClick={closeClick} className='close_boton'>
                  <img
                      className="cancion"
                      src= "https://images2.imgbox.com/6d/20/HrvAiajx_o.png"
                      alt="Cerrar"
                      width={25}
                      height={25}
                      />
                  </a>    
              </div>        
                </div>
          }         
          
          </>          
        : 
           null}
        </>            
        );
           
      })}        
      </div>
    </>
  );
}