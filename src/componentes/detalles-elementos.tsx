

type detallesItemProps = {
    cancion?: string;
    content?: string;
  };
  function DetallesItem({ cancion, content }: detallesItemProps) {
    return (
      <article>
        {cancion ? <p>{cancion}</p> : null}
        {content ? <p>{content}</p> : null}
      </article>
    );
  }

  export default DetallesItem;