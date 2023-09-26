import React, { useCallback, useEffect } from 'react'
import { Header } from '../../components/header'
import { Banner } from '../../assets/images'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { PayloadLoginType, schemeLogin } from '../../schemes/auth'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { KEY, authServices } from '../../services/auth'

export const LoginPage = () => {
  const navigation = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schemeLogin)
  })

  const onLogin = async (data: PayloadLoginType) => {
    try {
      await authServices.login(data);
      toast('Login successfully');
      navigation('/', { replace: true })
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
    <div className='h-screen w-screen' style={{ overflow: 'hidden' }}>
      <Header />
      <div className="absolute inset-0 w-full ml-0 mt-0 mb-0" style={{ zIndex: -1 }}>
        <img src={Banner} alt="bg-login-page" className="ml-0 w-full h-screen" style={{ objectFit: 'cover' }} />
      </div>
      <div className="w-screen flex justify-center mt-8">
        <div className="text-black" style={{ backgroundColor: 'white', padding: 30, borderRadius: 12 }}>
          <h2>Login</h2>
          <label for-html="email" className='ml-0 w-full flex mt-3'>Email</label>
          <input type="text" id="email" placeholder="Your email" {...register('email')} />
          {errors?.email?.message ? (
            <p style={{ color: 'red', height: 15, fontSize: 12, marginTop: -5 }} className="ml-0 flex">{errors?.email?.message}</p>
          ) : (<div style={{ height: 15 }} />)}

          <label for-html="password" className='ml-0 w-full flex mt-3'>Password</label>
          <input type="text" id="password" placeholder="Input password" {...register('password')} />
          {errors?.password?.message ? (
            <p style={{ color: 'red', height: 15, fontSize: 12, marginTop: -5 }} className="ml-0 flex">{errors?.password?.message}</p>
          ) : (<div style={{ height: 15 }} />)}

          <button style={{ marginTop: 30, width: '100%' }} onClick={handleSubmit(onLogin)}>Login</button>
        </div>
      </div>
    </div>
  )
}
