import React from "react";
import {InputForm,Button} from "../../components";

const Login = ()=>{
    return (
        <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
            <h3>Đăng nhập</h3>
            <div className="w-full flex flex-col gap-3">
                <InputForm
                    label='SỐ ĐIỆN THOẠI'
                />
                <InputForm
                    label='MẬT KHẨU'
                />
            </div>

            <Button
                text='Đăng nhập'
                bgColor='bg-secondary1'
                textColor='text-white'
                fullWidth
            />

            <div className="mt-7 flex justify-between">
                <small className='text-[blue] hover:text-[orange] cursor-pointer'>Quên mật khẩu</small>
                <small className='text-[blue] hover:text-[orange] cursor-pointer'>Tạo tài khoản mới</small>
            </div>
            
        </div>
    )
}

export default Login