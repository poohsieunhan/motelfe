import React ,{useCallback}from "react";
import logo from '../../assets/logopt-removebg.png'
import { Button } from '../../components';
import icons from '../../ultis/icon'
import {useNavigate} from 'react-router-dom';
import {path} from '../../ultis/constant';


const {AiOutlinePlusCircle}  = icons;
console.log(icons);

const Header =()=>{
    const navigate = useNavigate();
    const goLogin  = useCallback(()=>{
        navigate(path.LOGIN)
    },[])

    return (
        <div className="w-1100 flex item-center justify-between">
            
        <img
        src= {logo}
        alt="logo"
        className="w-240 h-70 object-contain"
        >
        </img>

        <div className="flex items-center gap-1">
            <Button 
                text='Đăng nhập' 
                textColor='text-white' 
                bgColor='bg-[#0F70E6]'
                onClick={goLogin}
            />
            <Button 
                text='Đăng ký' 
                textColor='text-white' 
                bgColor='bg-[#0F70E6]'
                onClick={goLogin}
            />
            <Button text='Đăng tin mới' textColor='text-white' bgColor='bg-secondary2' IcAfter={AiOutlinePlusCircle} />
        </div>


        </div>
    )
}

export default Header;