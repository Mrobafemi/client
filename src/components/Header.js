import React from 'react';
import { DollaSign, ShoppingBag, User } from '../assets/';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from "react-toastify"
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
       <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Home</li>
       <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Pages</li> 
       <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Shop</li> 
       <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Element</li> 
       <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Blog</li>  
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
