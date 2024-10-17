import { useRef, useState, useContext, useEffect, useCallback } from 'react';
import '../assets/barra-abajo.css';
import '../assets/barra-progreso-audio.css';
import { AudioContext } from '../App.tsx';



export type Prop = {
    img?: string;
    titulo?: string;
    artista?: string;
    audioHighMp3?: string;
    reproducir?: boolean;
  };

  /*const AUDIO_URL = 'https://audioboom.com/posts/8562837.mp3';*/
  
  function BarraAbajo3({ img, titulo, artista,  audioHighMp3, reproducir}: Prop) {

    const [isPlaying, setIsPlaying] = useState(false);    
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const progressBarRef = useRef<HTMLInputElement | null>(null);
    const audioContext = useContext(AudioContext);
    const audioUrl: string = audioHighMp3 ?? '';
    const imgUrl: string = img ?? '';
    const tituloInterno: string = titulo ?? '';
    const artistaInterno: string = artista ?? '';
    const [tiempoActual, setTiempoActual] = useState(0);
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const playAnimationRef = useRef(0);

    function handleClick() {
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
    }
  
    function reset() {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
        audioContext?.changeAudioState(
          false, 
          audioUrl,
          imgUrl,
          tituloInterno,
          artistaInterno,
          true, 
          true
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
          audioContext.artista, 
          false,
          true
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
    /*useEffect(() => {
        if (isPlaying) {
          audioRef.current.play();
          playAnimationRef.current = requestAnimationFrame(repeat);
        } else {
          audioRef.current.pause();
          cancelAnimationFrame(playAnimationRef.current);
        }
      }, [isPlaying, audioRef, repeat]);*/

    function handleProgressChange() {
        /*console.log(progressBarRef.current.value);*/
        /*const duracion: number = progressBarRef.current?.value ?? 0; */  
        setTiempoActual( Number( progressBarRef.current?.value));     
        if (audioRef.current){
            audioRef.current.currentTime = tiempoActual;
        }
        
    }

    function onLoadedMetadata() {
        console.log(audioRef.current?.duration);
        const seconds = audioRef.current?.duration;
        setDuration( Number(seconds) );
        if (progressBarRef.current){
            progressBarRef.current.max = String(seconds) ;
        }
        
    }

    function formatTime2(time : number) {
        if (time && !isNaN(time)) {
            const minutes = Math.floor(time / 60);
            const formatMinutes =
              minutes < 10 ? `0${minutes}` : `${minutes}`;
            const seconds = Math.floor(time % 60);
            const formatSeconds =
              seconds < 10 ? `0${seconds}` : `${seconds}`;
            return `${formatMinutes}:${formatSeconds}`;
          }
          return '00:00';
    }

    const repeat = useCallback(() => {
        const currentTime = audioRef.current?.currentTime;
        setTimeProgress( Number(currentTime) );
        if (progressBarRef.current) {
            progressBarRef.current.value = String(currentTime);
            progressBarRef.current.style.setProperty(
          '--range-progress',
          `${( Number(progressBarRef.current.value)  / duration) * 100}%`
        );
        }   
        playAnimationRef.current = requestAnimationFrame(repeat);
      }, [audioRef, duration, progressBarRef, setTimeProgress]);    

      if(reproducir) {      
        audioRef.current?.play(); 
        playAnimationRef.current = requestAnimationFrame(repeat);         
      } else {
        audioRef.current?.pause();
        cancelAnimationFrame(playAnimationRef.current);
      }

        /*if(reproducir) {      
            audioRef.current?.play();         
        }*/


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
            {reproducir ? 
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
            
                
            <audio key={audioHighMp3} ref={audioRef} autoPlay={true} onLoadedMetadata={onLoadedMetadata}>
              <source src={audioHighMp3} type="audio/mpeg" />
            </audio>
                <div className="progress">
                    <span className="time current">{ formatTime2(timeProgress) }</span>
                    <input 
                    type="range" 
                    ref={progressBarRef}
                    defaultValue="0"
                    onChange={handleProgressChange}
                    />
                    <span className="time">{formatTime2(duration)}</span>
                </div>
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
  
  export default BarraAbajo3;