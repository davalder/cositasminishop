import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getApi = async () => {
            const response = await axios(API);
            setProducts(response.data);
        }
        getApi()
    }, []);
    return products;
}


export default useGetProducts;

