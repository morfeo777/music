import './assets/barra-izquierda-estilos.css'

type Props = {
    title: string;
};

function Boton(props : Props) {
    return(
        <div className='botones'>
            <h4 className='boton'>
                {props.title}
            </h4>
        </div>
    );
}

export default Boton;

