import React,{useEffect, useState} from "react";
import {InputForm,Button} from "../../components";
//import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { apiRegister } from "../../services/auth";

const Login = ()=>{
    const location = useLocation();
    const [isRegister,setisRegister] = useState(location?.state.flag);
    const [payload,setPayload] = useState({
        phone:'',
        password:'',
        name:''
    })
    
    useEffect(()=>{
        setisRegister(location?.state.flag)
    },[location?.state.flag])

    const handleSubmit = async ()=>{
        console.log(payload);
        // const response = await apiRegister(payload)
        // console.log(response);
    }

    return (
      
        <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
         <h3 className="font-semibold text-2xl mb-3">  {isRegister ? 'Đăng kí tài khoản' : 'Đăng nhập'} </h3>
            <div className="w-full flex flex-col gap-5">
                {isRegister && <InputForm label="HỌ TÊN" value={payload.name} setValue={setPayload} type={'name'} /> }
                <InputForm
                    label='SỐ ĐIỆN THOẠI'
                    value={payload.phone}
                    setValue={setPayload}
                    type={'phone'}
                />
                <InputForm
                    label='MẬT KHẨU'
                    value={payload.password}
                    setValue={setPayload}
                    type={'password'}
                />
            </div>

            <Button
                text= {isRegister ? 'Đăng ký':'Đăng nhập'}
                bgColor='bg-secondary1'
                textColor='text-white'
                fullWidth
                onClick={handleSubmit}
            />
            <div className="mt-7 flex justify-between">
            {isRegister
            ?
                <small>Bạn đã có tài khoản? 
                <span onClick={()=>{setisRegister(false)}} className="text-blue-500 hover:text-[red] cursor-pointer">Đăng nhập ngay</span></small>
            : <>           
                <small className='text-[blue] hover:text-[orange] cursor-pointer'>Quên mật khẩu</small>
                <small className='text-[blue] hover:text-[orange] cursor-pointer'>Tạo tài khoản mới</small>
             </>}
              </div>
              
        </div>
    )
    
}

export default Login