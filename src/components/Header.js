import React, { useState } from 'react';
import { DollaSign, ShoppingBag, User } from '../assets/';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from "react-toastify"
import { BiMenu, AiOutlineClose } from 'react-icons';
const Header = () => {
   const productData = useSelector((state) => state.Dollasign.productData);
   const userInfo = useSelector((state) => state.Dollasign.userInfo);
   console.log(userInfo);
   
  return  (
  <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
  <div className="max-w-screen-x1 h-full mx-auto flex items-center justify-between">
    <Link to="/">
    <div>
        <img className='w-10' src={DollaSign} alt="DollaSign" />
    </div>
    </Link>
   <div className="flex items-center gap-8">
    <ul className="flex items-center gap-8">
       <Link to="/"><li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Rings</li></Link>
       <Link to="/Earrings"><li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Earrings</li></Link>
       <Link to="/Necklace"><li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Necklace</li></Link>
       <Link to="/Bracelet"><li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Bracelet</li></Link>
       <Link to="/Glass"><li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Glass</li></Link>
    </ul>
    <Link to="/Cart"><div className="relative">
    <img className="w-6" src={ShoppingBag} alt=""/>
    <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center 
    font-semibold">
        {productData.lenght} 
        </span>
    </div >
    </Link>
    <Link to="/Login">
  <img className="w-8 h-8 rounded-full border-2"
     src={userInfo?userInfo.image : User} alt=""
    />
  </Link>

  {
    userInfo && (
    <p className="text-base font-titleFont font-semibold underline 
    underline-offset-2 hover:text-green-600 cursor-pointer duration-300">
      {userInfo.name}
      </p>
    )
  }
 
    </div>
  </div>
  <ToastContainer 
  Position="top-left"
  autoClose={2000}
  hideProgressBar={false}
  newestOntop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
  />
  </div>
  );
};

export default Header;
