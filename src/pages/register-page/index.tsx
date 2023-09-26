import React, { useCallback, useEffect } from 'react'
import { Header } from '../../components/header'
import { Banner } from '../../assets/images'
import { yupResolver } from '@hookform/resolvers/yup'
import { PayloadRegisterType, schemeRegister } from '../../schemes/auth'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { KEY, authServices } from '../../services/auth'
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
  const navigation = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schemeRegister)
  });

  const onRegister = async (data: PayloadRegisterType) => {
    try {
      await authServices.register(data);
      toast('Register successfully');
      navigation('/login', { replace: true })
    } catch (error) {
      const err = error as { message: string }
      toast(err?.message || "Something error")
    }
  }

  const checkLogged = useCallback(() => {
    const userInfo = localStorage.getItem(KEY.USER_INFO);
    if (userInfo) {
      navigation('/');
    }
  }, [navigation])

  useEffect(() => {
    checkLogged();
  }, [checkLogged])

  return (
    <div className='h-screen w-screen'>
      <Header />
      <div className="absolute inset-0 w-full ml-0 mt-0 mb-0" style={{ zIndex: -1 }}>
        <img src={Banner} alt="bg-login-page" className="ml-0 w-full" style={{ objectFit: 'cover', height: '110vh' }} />
      </div>
      <div className="w-screen flex justify-center mt-8">
        <div className="text-black" style={{ backgroundColor: 'white', padding: 30, borderRadius: 12 }}>
          <h2>Register</h2>
          <label for-html="fname" className='ml-0 w-full flex mt-1'>First Name</label>
          <input type="text" id="fname" {...register("firstName")} placeholder="Your name" />
          {errors?.firstName?.message ? (
            <p style={{ color: 'red', height: 15, fontSize: 12, marginTop: -5 }} className="ml-0 flex">{errors?.firstName?.message}</p>
          ) : (<div style={{ height: 15 }} />)}

          <label for-html="lname" className='ml-0 w-full flex mt-1'>Last Name</label>
          <input type="text" id="lname" {...register("lastName")} placeholder="Your last name" />
          {errors?.lastName?.message ? (
            <p style={{ color: 'red', height: 15, fontSize: 12, marginTop: -5 }} className="ml-0 flex">{errors?.lastName?.message}</p>
          ) : (<div style={{ height: 15 }} />)}

          <label for-html="email" className='ml-0 w-full flex mt-1'>Email</label>
          <input type="text" id="email" {...register("email")} placeholder="Your email" />
          {errors?.email?.message ? (
            <p style={{ color: 'red', height: 15, fontSize: 12, marginTop: -5 }} className="ml-0 flex">{errors?.email?.message}</p>
          ) : (<div style={{ height: 15 }} />)}

          <label for-html="password" className='ml-0 w-full flex mt-1'>Password</label>
          <input type="password" id="password" {...register("password")} placeholder="Input password" />
          {errors?.password?.message ? (
            <p style={{ color: 'red', height: 15, fontSize: 12, marginTop: -5 }} className="ml-0 flex">{errors?.password?.message}</p>
          ) : (<div style={{ height: 15 }} />)}

          <label for-html="confirmPassword" className='ml-0 w-full flex mt-1'>Confirm password</label>
          <input type="password" id="confirmPassword" {...register("confirmPassword")} placeholder="Input confirm password" />
          {errors?.confirmPassword?.message ? (
            <p style={{ color: 'red', height: 15, fontSize: 12, marginTop: -5 }} className="ml-0 flex">{errors?.confirmPassword?.message}</p>
          ) : (<div style={{ height: 15 }} />)}

          <label for-html="gender" className='ml-0 w-full flex mt-1'>Gender</label>
          <select id="gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <button style={{ marginTop: 30, width: '100%' }} onClick={handleSubmit(onRegister)}>Register</button>
        </div>
      </div>
    </div>
  )
}
