import React ,{useCallback}from "react";
import logo from '../../assets/logopt-removebg.png'
import { Button } from '../../components';
import icons from '../../ultis/icon'
import {useNavigate,Link} from 'react-router-dom';
import {path} from '../../ultis/constant';


const {AiOutlinePlusCircle}  = icons;
//console.log(icons);

const Header =()=>{
    const navigate = useNavigate();
    const goLogin  = useCallback((flag)=>{
        navigate(path.LOGIN,{state: {flag}})
    },[])

    return (
        <div className="w-1100 flex item-center justify-between">
            <Link to={"/"}>
            <img
        src= {logo}
        alt="logo"
        className="w-240 h-70 object-contain"
        >
        </img>
            </Link>
       
        <div className="flex items-center gap-1">
            <Button 
                text='Đăng nhập' 
                textColor='text-white' 
                bgColor='bg-[#0F70E6]'
                onClick={()=>{goLogin(false)}}
            />
            <Button 
                text='Đăng ký' 
                textColor='text-white' 
                bgColor='bg-[#0F70E6]'
                onClick={()=>{goLogin(true)}}
            />
            <Button text='Đăng tin mới' textColor='text-white' bgColor='bg-secondary2' IcAfter={AiOutlinePlusCircle} />
        </div>


        </div>
    )
}

export default Header;