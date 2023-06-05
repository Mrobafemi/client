import React from 'react'
import ProdcutsCard from './ProdcutsCard';

const Products = ({products}) => {
    // console.log(products);

  return (<div className="py-10">
       <div className="flex flex-col items-center gp-4">
        <h1 className="text-2x1 bg-black text-white py-2 w-80 text-center">
            Dolla$ign Store
            </h1>
            <span className="w-20 h-[3px] bg-black mt-2 "></span>
            <p className="max-w-[700px] text-gray-600 text-center">
            DollaSign offers beautiful selection of personalized jewelry styles, necklaces, birthstone rings and more. 
            We have been delivering a great shopping experience for jewelry lovers all over Nigeria since 2018.
            </p>
       </div>
       <div className="max-w-screen-x1 mx-auto py-10 grid grid-cols-4 gap-10">
        {
            products.map((item)=>(
                <ProdcutsCard key={item._id} product={item} />
            ))
        }
     </div>
    </div>
  );
};

export default Products;