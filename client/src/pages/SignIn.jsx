import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signInStart, signInSuccess, signInFailure} from '../redux/user/userSlice.js'
import OAuth from '../components/OAuth.jsx'

export default function SignIp() {
  const [formData, setFormDate] =useState({})
  const {loading, error} = useSelector((state) => state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleChange = (e) =>{
    setFormDate({
      ...formData,
      [e.target.id]:e.target.value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart())
      const res = await fetch('/api/auth/signin', 
        {
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if(data.success === false){
        dispatch(signInFailure(data.message))
        return
      }
      dispatch(signInSuccess(data))
      navigate('/')
    } catch (error) {
      dispatch(signInFailure(error.message))
    }
    
  }
  console.log(formData);
  
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>登录</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="email" placeholder='邮箱' className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
        <input type="password" placeholder='密码' className='border p-3 rounded-lg' id='password' onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>{loading ? '加载中...' : '登录'}</button>
        <OAuth/>
      </form>
      <div className='flex gap-4 mt-5'>
        <p>没有账号吗？</p>
        <Link to={"/sign-up"}>
          <span className='text-blue-700'>点击注册</span>
        </Link>
      </div>
      {error && <p className='text-red-800 mt-5'>{error}</p>}
    </div>
  )
}
