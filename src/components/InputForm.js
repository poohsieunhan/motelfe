import React,{memo} from "react";

const InputForm = ({label})=>{
    return(
        <>
            <label htmlFor="phone">{label}</label>
            <input 
            type="text" 
            id="phone"
            className="outline-none bg-[#E8F0FE] p-2 rounded-md w-full" 
            />
        </>
    )
}

export default memo(InputForm);