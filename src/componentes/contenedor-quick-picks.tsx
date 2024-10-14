import '../assets/quick-picks.css';

export type Prop = {
    img?: string;
    titulo?: string;
    artista?: string;
  };
  
  function QuickPicksContenedor({ img, titulo, artista }: Prop) {
    return (
      
        <div className='quick-picks'>        
          
          {img ? (
            <img
                className="cancion"
                src={img}
                alt="Imagen"
                width={57}
                height={52}
                />
                ) : null}
                <div className='titulos-quick-picks'>                  
                    {titulo}
                    <br></br>
                    {artista}                  
                </div>
                    
        </div>        
      
      
    );
  }
  
  export default QuickPicksContenedor;