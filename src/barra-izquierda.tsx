import './assets/barra-izquierda-estilos.css'

type Props = {
    title: string;
};

function Boton(props : Props) {
    return(
        <h3 className='boton'>
            {props.title}
        </h3>
    );
}

export default Boton;

