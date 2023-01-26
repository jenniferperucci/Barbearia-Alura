import './SelectList.css'

export const SelectList = (props) =>{
    return(
        <div className='select-list'>
            <label>{props.label}</label>
            <select onChange={e =>props.whenChangin(e.target.value)} required={props.mandatory} value={props.value}>
                {props.itens.map(item => <option key={item}>{item}</option>)} 
            </select>
        </div>

    )
}