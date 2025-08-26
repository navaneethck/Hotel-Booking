import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

  const[data,setData] = useState({name:'',email:'',password:''});

  const getFormData = (e)=>{
    const{name,value}=e.target;
    setData((prevState)=>({
      ...prevState,
      [name]:value
    }))
  }

    const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log("Form Data:", data);
    if(!data.name || !data.email || !data.password){
      alert('please fill all inputs')
    }

    try{
      const response = await fetch(`${import.meta.env.VITE_API_URI}/api/auth/register`,{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)
      })
      const result = await response.json();

      // console.log('response from backend',result)
      alert(result?.message||'something went wrong');
      
      setData({ name: '', email: '', password: '' });
      

    }catch(error){
        console.error("Error:", error);
    }
  }
  

  return (
    <div className="fixed inset-0 bg-gradient-to-r from-gray-200 via-purple-400 to-purple-600  flex items-center justify-center">
      <div className="bg-white w-[90%] max-w-[500px] p-8 rounded-xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-violet-800">Register</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name='name'
              placeholder="Enter your Name"
              value={data.name}
              onChange={getFormData}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
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

          <div className="flex justify-between text-sm text-violet-800 mt-2">
            <a href="#" className="hover:underline">Forgot password?</a>
            <Link className="hover:underline" to="/Login" > Login </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-violet-700 text-white py-2 rounded-md mt-4 hover:bg-violet-800 transition cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

