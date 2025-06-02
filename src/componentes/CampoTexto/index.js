import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...`
        return (
        <div>
            <div className="campo-texto">
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder ={placeholderModificado}/>
            </div>
        </div>
    )

}
export default CampoTexto