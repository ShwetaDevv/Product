import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Submitted data:', data);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="bg-gray-700 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl text-white text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}> 
          <div className="mb-4">
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              value={data.email}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black rounded"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-white mb-2">Password</label>
            <input 
              type="password" 
              id="password" 
              value={data.password}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black rounded"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-4 text-center">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <a href="/register" className="text-blue-400 hover:underline">
                Register here
              </a>
            </p>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;




