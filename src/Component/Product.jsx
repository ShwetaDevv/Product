import React from 'react';
import { useNavigate } from 'react-router-dom';

function Product() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login'); 
  };

  return (
    <div className='flex justify-around items-center mb-4 '>
      <h1 className='text-6xl'>Products</h1>
      <button 
        className='mt-4 px-4 py-2 border-2 border-black bg-gray-600 text-white rounded '
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>

   
  );
}

export default Product;
