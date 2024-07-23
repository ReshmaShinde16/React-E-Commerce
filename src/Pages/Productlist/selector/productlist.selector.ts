import { useSelector } from "react-redux";

export function useGetProductList(){
   return useSelector((state:any)=>state.product.products
    )
}