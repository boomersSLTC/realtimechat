import React from 'react'
import { useState } from 'react'
const Register = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='bg-blue-50 h-screen flex items-center'>
        <form className='w-64 mx-auto mb-12'>
            <input 
              value={username}
              type='text' 
              placeholder='Username' 
              className='block w-full rounded-sm p-2 mb-2 border' 
              onChange={(e)=>setUsername(e.target.value)}
            />
            <input 
              value={password}
              type='password' 
              placeholder='Password' 
              className='block w-full rounded-sm p-2 mb-2 border'
              onChange={(e)=>setPassword(e.target.value)}
            />
            <button className='bg-blue-500 text-white block w-full rounded-sm p-2'>Register</button>
        </form>
    </div>
  )
}

export default Register