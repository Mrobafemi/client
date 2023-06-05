import React from 'react'
import { DollaSign, PaymentPicture,} from '../assets';
import {FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaHome, FaSnapchat,} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { useEffect } from 'react';
 

const Footer = () => {
    useEffect(() => {
        const script = document.createElement('script');
      
        // script.src = "https://use.typekit.net/foobar.js";
        script.src="//code.tidio.co/ybtq0uxaynhbs1uy3rjdng39mhwwyypl.js"
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);






  return (
   <div className="bg-black text-[#949494] py-20 font-titleFont ">
    <div  className="max-w-screen-x1 mx-auto grid grid-cols-4">
    {/*====================LogoIcon start here========== */}
        <div className="flex flex-col gap-7  ml-9"> 
            <img className="w-12" src={DollaSign} alt="DollaSign"/>
            <p className="text-white text-sm tracking-wide"> @ DollaSign all right reserve</p>
            <img className="w-40" src={PaymentPicture} alt="PaymentPicture"/>
            <div className="flex gap-5 text-lg text-gray-400">
               <FaFacebook className="hover:text-white duration-300 cursor-pointer"/>
               <FaTwitter className="hover:text-white duration-300 cursor-pointer"/>
               <FaInstagram className="hover:text-white duration-300 cursor-pointer"/>
               <FaYoutube className="hover:text-white duration-300 cursor-pointer"/>
               <FaSnapchat className="hover:text-white duration-300 cursor-pointer"/>
            </div>
           
        </div>
{/*====================LogoIcon End here========== */}
{/*====================Locate Us start here========== */}
 <div>
 <h2 className="text-2x1 font-semibold text-white mb-4">Locate Us</h2>
 <div className="text-base flex flex-col gap-2">
    <p className="flex items-center gap-1"><span className="text-lg"><MdLocationOn/></span>123 Anywhere St, Malomo, Ikorodu Lagos</p>
    <p>PHONE: +2348057238689</p>
    <p>E-MAIL: info@DollaSignecommerce.com</p>
    </div>
 </div>
{/*====================Locate us End here========== */}
{/*====================Profile start here========== */}
<div>
<h2 className="text-2x1 font-semibold text-white mb-4">Profile</h2>
<div className="text-base flex flex-col gap-2">
<p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
    <span className="text-lg">
        <BsPersonFill/>
</span>
My Account
</p> 
<p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
    <span className="text-lg">
        <FaHome/>
</span>
Track Your Order
</p> 
<p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
    <span className="text-lg">
        <MdLocationOn/>
</span>
Help & Support
</p> 
<p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
    <span className="text-lg">
        <BsPaypal/>
</span>
Checkout
</p> 
</div>
</div>
{/*====================Profile End start here========== */}
{/*====================Subscribe start here========== */}
<div className="flex flex-col justify-center">
    <input className="bg-transparent border px-4 text-sm mr-9" placeholder="E-mail" type="text" />
    <button className="text-sm border text-white border-t-0 hover:bg-gray-900
    active:bg-white active:text-black mr-9">Subscribe</button>
</div>
{/*====================Subscribe End here========== */}
{/*====================Logo start here========== */}
{/*====================Logo start here========== */}
    </div>
   </div>
  );
};
export default Footer;
