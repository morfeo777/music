import QuickPicksContenedor, {Prop} from "./contenedor-quick-picks";
import '../assets/quick-picks.css';

function QuickPicksPrueba() {
    const quicks: Prop[] = [
        {
          img: 'https://i.imgur.com/qp4mbtj.jpeg',
          titulo: 'Ingeniero',
          artista: 'juan.perez@example.com',
        },
        {
          img: 'https://i.imgur.com/qp4mbtj.jpeg',
          titulo: 'Ingeniero',
          artista: 'juan.perez@example.com',
        },
        {
          img: 'https://i.imgur.com/qp4mbtj.jpeg',
          titulo: 'Ingeniero',
          artista: 'juan.perez@example.com',
        },
      ];
    return(
        <>
            <div className="quick-picks">
                <QuickPicksContenedor 
                    img="https://i.imgur.com/qp4mbtj.jpeg" 
                    titulo="Listen Again"
                    artista="Mufambi"/>
                <QuickPicksContenedor 
                    img="https://i.imgur.com/qp4mbtj.jpeg" 
                    titulo="Listen Again"
                    artista="Mufambi"/>
                <QuickPicksContenedor 
                    img="https://i.imgur.com/qp4mbtj.jpeg" 
                    titulo="Listen Again"
                    artista="Mufambi"/>
                <QuickPicksContenedor 
                    img="https://i.imgur.com/qp4mbtj.jpeg" 
                    titulo="Listen Again"
                    artista="Mufambi"/>
            </div>
            <br />
            <div className="quick-picks">
                <QuickPicksContenedor 
                img="https://i.imgur.com/qp4mbtj.jpeg" 
                titulo="Listen Again"
                artista="Mufambi"/>
             <QuickPicksContenedor 
                img="https://i.imgur.com/qp4mbtj.jpeg" 
                titulo="Listen Again"
                artista="Mufambi"/>
             <QuickPicksContenedor 
                img="https://i.imgur.com/qp4mbtj.jpeg" 
                titulo="Listen Again"
                artista="Mufambi"/>
             <QuickPicksContenedor 
                img="https://i.imgur.com/qp4mbtj.jpeg" 
                titulo="Listen Again"
                artista="Mufambi"/>
            </div>
            <br />
            <div className="quick-picks">
                {quicks.map((quick: Prop) => (
                    <QuickPicksContenedor
                        img={quick.img}
                        titulo={quick.titulo}
                        artista={quick.artista}                        
                    />
                ))}
            </div>
            
        </>
    );
}

export default QuickPicksPrueba;