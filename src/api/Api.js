import axios from "axios";


export async function ProductsData () {
    const Products = await axios.get(
        "https://fakestoreapiserver.reactbd.com/products"
        );
        return Products;
}