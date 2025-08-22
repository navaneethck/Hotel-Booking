import { useState } from 'react';
import { UseUserContext } from '../../contexts/userContext';
import {  useNavigate } from 'react-router-dom';


const Login = () => {
  const [data,setData]=useState({email:'',password:''});
  const {setUser} = UseUserContext();
  const navigate = useNavigate();

  const getFormData =(e)=>{
    const{name,value}= e.target;
    setData((prevState)=>{
      return{
        ...prevState,
        [name]:value
      }
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();

    try{
    const response = await fetch(`${import.meta.env.VITE_API_URI}/api/auth/login`,{
      method:'POST',
      credentials:'include',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data)
    })

    const result = await response.json();
    console.log('response from the backend',result);

    if(response.ok){
      setUser(result.user);
      navigate('/');
    }else{
        alert(result?.message||'something went wrong');
    }

     setData({email:'',password:''});
     
  }catch(err){
    console.log('error from catch',err)
  }
  }
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-gray-200 via-purple-400 to-purple-600  flex items-center justify-center">
      <div className="bg-white w-[90%] max-w-[500px] p-8 rounded-xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-violet-800">Login</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name='email'
              placeholder="Enter your email"
              value={data.email}
              onChange={getFormData}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              name='password'
              placeholder="Enter your password"
              value={data.password}
              onChange={getFormData}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-violet-700 text-white py-2 rounded-md mt-4 hover:bg-violet-800 transition cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

