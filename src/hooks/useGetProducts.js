import { useEffect, useState } from "react";
import listProducts from "../productState";
import axios from "axios";

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // const getApi = async () => {
        //     const response = await axios(API);
        //     setProducts(response.data);
        // }
        // getApi()
        setProducts(listProducts)
    }, []);
    console.log(products);
    return products;
}


export default useGetProducts;

