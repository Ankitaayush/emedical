import React,{useReducer} from "react";

import './Input.css'

const inputReducer = (state,action) => {
    switch(action.type){
        case 'CHANGE' :
            return {
                value:action.val
            }
        
        default :
            return state;
    }
}

const Input = (props) => {
    // const [inputState,setInputState] = useState('');
    const [inputState,dispatch] = useReducer(inputReducer,{
        value:''
    })


    const changeHandler = (event) => {
        dispatch({
            type:'CHANGE',
            val:event.target.value});
    }

    const content = props.element === 'input' ?
    (<input id={props.id} type={props.type} placeholder={props.placeholder} onChange={changeHandler} value={inputState.value} />) : 
    (<textarea id={props.id} rows = {props.rows || 3} onChange={changeHandler} value={inputState.value} />) ;

    return (
        <div className={`form-control`} >
            <label htmlFor={props.id}>{props.label}</label>
            {content}
        </div>
    );
}


export default Input;