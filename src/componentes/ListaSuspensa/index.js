import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select requred={props.required} value = {props.valor} onChange={evento => props.aoAlterado(evento.target.value)}>
                {props.itens.map(item => {
                    return <option key = {item}> {item}</option>
                })}
            </select>
            </div>
    )
}


export default ListaSuspensa
