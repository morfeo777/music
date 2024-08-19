import QuickPicksContenedor, {Prop} from "./contenedor-quick-picks";
import '../assets/quick-picks.css';

function QuickPicks() {
    const quicks: Prop[] = [
        {
          img: 'https://images2.imgbox.com/3a/fa/zc2jEw6s_o.png',
          titulo: 'Happy',
          artista: 'Robbie Williams.Listen Again',
        },
        {
          img: 'https://images2.imgbox.com/07/8b/slQck9Tm_o.png',
          titulo: 'Love Story',
          artista: 'Jhon Lennon',
        },
        {
          img: 'https://images2.imgbox.com/74/b8/DsvSf2rI_o.png',
          titulo: 'Smooth',
          artista: 'Coldplay',
        },
      ];
      const quicks2: Prop[] = [
        {
          img: 'https://images2.imgbox.com/d1/9b/Wb1rnJMW_o.png',
          titulo: 'Cheap Thrills',
          artista: 'Jessie J.Listen Again',
        },
        {
          img: 'https://images2.imgbox.com/86/33/uHQM3OUV_o.png',
          titulo: 'I Will Allways Love You',
          artista: 'Coldplay',
        },
        {
          img: 'https://images2.imgbox.com/3a/fa/zc2jEw6s_o.png',
          titulo: 'I Gotta Feeling',
          artista: 'George Michael',
        },
        {
            img: 'https://images2.imgbox.com/29/ed/A83QF6U1_o.png',
            titulo: 'Someone Like You',
            artista: 'Elton Jhon',
          },
      ];
      
      const quicks3: Prop[] = [
        {
          img: 'https://images2.imgbox.com/dc/cf/MEu5p3iJ_o.png',
          titulo: 'Ingeniero',
          artista: 'juan.perez',
        },
        {
          img: 'https://images2.imgbox.com/ca/53/QZQPfyvR_o.png',
          titulo: 'Royals',
          artista: 'Florence Welch',
        },
        {
          img: 'https://images2.imgbox.com/d1/9b/Wb1rnJMW_o.png',
          titulo: 'Radioactive',
          artista: 'Listen Again.Listen Again',
        },
        {
            img: 'https://images2.imgbox.com/c6/52/TMHd2xoo_o.png',
            titulo: 'Say Something',
            artista: 'Listen Again.Listen Again',
          },
      ];

    return(
        <>
            <div className="quick-picks">
                {quicks.map((quick: Prop) => (
                        <QuickPicksContenedor
                            img={quick.img}
                            titulo={quick.titulo}
                            artista={quick.artista}                        
                        />
                    ))}                
            </div>
            <br />
            <div className="quick-picks">                
                {quicks2.map((quick: Prop) => (
                        <QuickPicksContenedor
                            img={quick.img}
                            titulo={quick.titulo}
                            artista={quick.artista}                        
                        />
                    ))}
            </div>
            <br />
            <div className="quick-picks">
                {quicks3.map((quick: Prop) => (
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

export default QuickPicks;