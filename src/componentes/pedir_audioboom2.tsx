import { useEffect, useState } from 'react';


/*const API_URL_AUDIOBOOM = 'https://api.audioboom.com/audio_clips';*/

 /*type AudioBoomProp = { 
    audio_clips: string [];
   setAudioClips: Dispatch<React.SetStateAction<[]>>;
    setAudioClips: Dispatch<React.SetStateAction<[]>>;
  };*/
  /*export default function AudioBoom({ audio_clips, setAudioClips }: AudioBoomProp) {*/


export  const AudioBoom2 = url => {
    const [audio_clips, setAudioClips] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState('');

    
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

    const [personajes, setPersonajes] = useState(Array<AudioClips>);

    useEffect(() => {
        setIsLoaded(true);
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setAudioClips(data.body.audio_clips);
            setIsLoaded(false);
            setPersonajes(data.body.audio_clips);
          })
          .catch(() => {
            setError('Hubo un error');
          });
      }, []);
      
      return { error, isLoaded, audio_clips, personajes };

      /*return (
        <>
          {isLoaded ? (
            <p>{error}</p>
          ) : (
            audio_clips            
          )}
        </>
      );*/

};
