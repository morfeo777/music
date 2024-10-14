import { useRef, useState, useContext, useEffect } from 'react';
import '../assets/barra-abajo.css';
import { AiFillStepBackward } from "react-icons/ai";
import { AiFillStepForward } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { IconContext } from "react-icons";
import { AudioContext } from '../App.tsx';


export type Prop = {
    img?: string;
    titulo?: string;
    artista?: string;
    audioHighMp3?: string;
    reproducir?: boolean;
  };

  const AUDIO_URL = 'https://audioboom.com/posts/8562837.mp3';
  
  function BarraAbajo({ img, titulo, artista,  audioHighMp3, reproducir}: Prop) {

    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const audioContext = useContext(AudioContext);
    const audioPlay = (audioContext?.audioUrl ? audioContext.audioUrl : AUDIO_URL);
    const pepe = (audioContext?.audioUrl ? audioContext.audioUrl : AUDIO_URL); 
    

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
        /*const nextIsPlaying = !isPlaying;
        setIsPlaying(nextIsPlaying);
        if (!isPlaying) {
          setIsPlaying(true);
          setIsPaused(false);     
        } else {
          setIsPlaying(false);
          setIsPaused(true);      
        }*/
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
        /*const nextIsPlaying = !isPlaying;
        setIsPlaying(nextIsPlaying);
        if (!isPlaying) {
          setIsPlaying(true);
          setIsPaused(false);     
        } else {
          setIsPlaying(false);
          setIsPaused(true);      
        }*/
      }
    }

    useEffect(() => {
      /*handleClick();
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
        }*/
    });

    if(reproducir) {
      /*setIsPlaying(true);*/
      alert('Entro en Reproducir');
    }

    return (
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
            
                
            <audio key={audioHighMp3} ref={audioRef}>
              <source src={audioHighMp3} type="audio/mpeg" />
            </audio>
            </div>  
          
          <div className='info-barra-abajo'>
          {img ? (
            <img
                className="cancion"
                src={img}
                alt="Imagen"
                width={37}
                height={37}
                />
                ) : null}
                <div className='titulos-barra-abajo'>                  
                    {titulo}
                    <br></br>
                    {artista}                  
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
      
    );
  }
  
  export default BarraAbajo;