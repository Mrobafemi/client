import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
// import { Products } from '../components/Products';
import Products from '../components/Products';
import ProdcutsCard from '../components/ProdcutsCard';
import { useLoaderData } from 'react-router-dom';



 const Earrings = () => {
    const [products, setProducts ] = useState([]);
 
   
    return (
    <div>
        <Banner/>
        <Products products={products} />
        {/* <ProdcutsCard/> */}
    </div>
    );
  
};

export default Earrings;