
import './TextField.css'

export const TextField = (props) => {
    const modifiedInput = `${props.placeholder}...`
    const typing = (e) => {
        props.whenChanging(e.target.value)   
    }
    return (
        <div className='text-field' >
            <label>{props.label}</label>
            <input value={props.value} onChange={typing} required={props.mandatory} placeholder={props.placeholder} />
        </div>
    )
}

