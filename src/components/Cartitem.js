import react from "react";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi"
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, } from "react";
import { decreamentQuantity, increamentQuantity, deleteItem, resetCart } from "../redux/DollasignSlice";
import { ToastContainer, toast} from "react-toastify";
import { Link } from 'react-router-dom';



const CartItem = () => {
const dispatch = useDispatch()
    const productData = useSelector((state) => state.Dollasign.productData);
    let [baseQty, setBsaeQty] = useState(1);
    return ( 
    <div className="w-2/3 pr-10 ml-8">
        <div className="w-full ">
        <h2 className="font-bold text-2x1">Shopping Cart</h2>
        </div>
        <div>
         {
            productData.map((item)=> (
                <div key={item._id}
                className="flex items-center justify-betwe en gap-6 mt-6"
               >
                    <div className="flex items-center gap-2">
                        <MdOutlineClose 
                        onClick={()=> 
                            dispatch(deleteItem(item._id)) & 
                            toast.error(item.title)
                        } 
                        className="text-x4 text-gray-600 hover:text-red-600 
                        cursor-pointer duration-300"/>
                        <img 
                        className="w-36 h-36 object-cover"
                        src={item.image}
                        alt="productImg"
                        />
                    </div>
                    <h2 className="w-52">{item.title}</h2>
                    <p className="w-10">₦{item.price}</p>
                    <div className="w-52 flex items-center justify-between text-grey-500 gap-4 
                border p-3">
                    <p className="text-sm">Quantity</p>
                    <div className="flex items-start gap-4 text-sm font-semibold">
                        <span 
                        onClick={()=>
                        dispatch(
                            decreamentQuantity({
                                _id: item._id,
                                title: item.title,
                                image: item.image,
                                price: item.price,
                                quantity: 1,

                            })
                        )
                        }
                        className="border h-5 font-normal text-lg flex items-center
                        justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer
                        duration-300 active:bg-black">
                  
                        -
                        </span>
                        {item.quantity}
                        <span 
                        onClick={()=>
                        dispatch(
                            increamentQuantity({
                                _id: item._id,
                                title: item.title,
                                image: item.image,
                                price: item.price,
                                quantity: 1,

                            })
                        )
                        }
                        className="border h-5 font-normal text-lg flex items-center
                        justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer
                        duration-300 active:bg-black">
                  
                        +
                        </span>
                    </div>
                </div>
                    <p className="w-14">₦{item.quantity * item.price}</p> 
                </div>
            ))
         }
        </div>
        <button onClick={()=>
        dispatch(resetCart()) & toast.error("Your Cart is Empty!")
        } 
        className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800
        duration-300">
            Reset Cart
            </button>
            <Link to="/">
                <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400
                hover:text-black duration-300">
                    <span>
<HiOutlineArrowLeft />
                    </span>
                    Continue Shoping
                </button>
            </Link>
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

export default CartItem;