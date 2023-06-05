import React, { useEffect, useState } from 'react'
import { CartImage } from "../assets";
import { useSelector } from 'react-redux';
import CartItem from '../components/Cartitem';
import {ToastContainer, toast} from "react-toastify"
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";


 const Cart = () => {
  const productData = useSelector((state) => state.Dollasign.productData);
  const userInfo = useSelector((state) => state.Dollasign.userInfo);
  const [totalAmt, setTotalAmt ] = useState("");
  const [payNow, setpayNow] = useState(false);


  useEffect(()=>{
let price = 0;
productData.map((item) =>{
  price += item.price * item.quantity;
  return price;
});
setTotalAmt(price);
  },[productData]);
  const handleCheckout = () => {
    if(userInfo){
      setpayNow(true)
    }else{
      toast.error("Please sign in to Checkout");
    }
  };

  const payment = async(token)=>{
    await axios.post("http://localhost:8000/pay",{
      amount:totalAmt * 100,
      token: token,
    })
  }
  return ( 
  <div>
    <img 
    className="w-full h-60 object-cover"
    src={CartImage} alt="CartOrder"
    />
  <div className="max-w-screen-x1 mx-auto py-20 flex">
<CartItem/>
<div className="w-1/3 bg-[#f4f2f2] py-6 px-4">
<div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
  <h2 className="text-2x1 font-medium">Cart Totals</h2>
  <p className="flex items-center gap-4 text-base">
    Subtotal{" "}
    <span className="font-titleFont font-bold text-lg">
      ₦ {totalAmt}
      </span>
      </p>
      <p className="flex items-center gap-4 text-base">
    Delivery Fee{" "}
    <span className="font-titleFont font-bold text-lg">
      ₦ {totalAmt * 0.2 }
      </span>
      </p>
      <p className="flex items-center gap-4 text-base">
          Your order will be delivered to your Shipping address in your profile.
      </p>
</div>
<p className="font-titleFont font-semibold flex justify-between mt-6">{" "}
Total <span className="text-x1 font-bold">₦ {totalAmt * 0.2 + totalAmt}</span>
</p>
<button onClick={handleCheckout} className="text-base bg-black text-white w-full py-3 mt-6 hover: bg-gray"
>
  Proceed to checkout
  </button>
  {
payNow && (<div className="w-full mt-6 flex items-center justify-center">
  <StripeCheckout 
  stripekey="pk_test_51N9yrwEMHe7PexpsT9Jp1UOzwXCRjl9DsVJ909HV4Hx2PDTxCfEiwlQ4KUZ8NBR824TfczoND87fzNUZhZsqWEyo004ZhP7q0I"
  name="DollaSign Online Store"
  amount= {totalAmt * 100}
  label="Pay to DollaSign"
  description={`Your payment amount is ₦ ${totalAmt}`}
  token={payment}
  email={userInfo.email}
  />
</div>
  )}
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

export default Cart;
