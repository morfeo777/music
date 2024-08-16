type Prop = {
    img?: string;
    cancion?: string;    
    artista?: string;
    cantidadCanciones?: string;
}

function ListenAgainContainer({img, cancion, artista, cantidadCanciones}: Prop) {
    <article>
        {img ? (
            <img
            className="avatar"
            src={img}
            alt="Imagen"
            width={70}
            height={70}
            />
            ) : null}
            {cancion}
            <div className='contenedor-elementos'>
                {artista}'.'{cantidadCanciones}
            </div>
    </article>

}

function ListenAgain() {
    return(
        <>
            
            <ListenAgainContainer  img="https://i.imgur.com/qp4mbtj.jpeg" />
                 
            
        </>
        
    );
}

export default ListenAgain;