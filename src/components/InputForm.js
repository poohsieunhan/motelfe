import React,{memo} from "react";

const InputForm = ({label,value,setValue,type})=>{
    return(
        <>
            <label htmlFor="phone" className="text-xs">{label}</label>
            <input 
            type="text" 
            id="phone"
            className="outline-none bg-[#E8F0FE] p-2 rounded-md w-full" 
            value={value}
            onChange={(e)=>setValue(prev =>({...prev, [type]:e.target.value}))}
            />
        </>
    )
}

export default memo(InputForm);