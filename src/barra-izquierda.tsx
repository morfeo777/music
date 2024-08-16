import './assets/barra-izquierda-estilos.css'

type Props = {
    title: string;
};

function Boton(props : Props) {
    return(
        <h4 className='boton'>
            {props.title}
        </h4>
    );
}

export default Boton;

