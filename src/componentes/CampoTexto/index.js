import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
        return (
        <div>
            <div className="campo-texto">
            <label>{props.label}</label>
            <input value = {props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder ={placeholderModificada}/>
            </div>
        </div>
    )

}
export default CampoTexto