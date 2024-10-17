import { useContext } from "react";

import BarraAbajo3 from "./contenedor-barra-reproductor3.tsx";
import { AudioContext } from '../App.tsx';


const AUDIO_URL = 'https://audioboom.com/posts/8562837.mp3';

function Reproductor() {
const audioContext = useContext(AudioContext);
const img = (audioContext?.imgUrl ? audioContext.imgUrl : "https://images2.imgbox.com/9e/cc/WzZyfIr5_o.png");
const titulo = (audioContext?.titulo ? audioContext.titulo.slice(0, 14)+'...' : "Listen Again");
const artista = (audioContext?.artista ? audioContext.artista.slice(0, 21)+'...' : "Mufambi");   
const audioPlay = (audioContext?.audioUrl ? audioContext.audioUrl : AUDIO_URL);
const reproducir = (audioContext?.reproducir ? true : false);  

    return(
        <>
            <BarraAbajo3 
                img={img} 
                titulo={titulo}
                artista={artista}
                audioHighMp3={audioPlay}
                reproducir={reproducir}
                />
        </>
    );
}

export default Reproductor;

