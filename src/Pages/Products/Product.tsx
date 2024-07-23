import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Products = ()=>{

    const [product_name, setName] = useState('')
    const [product_price, setPrice] = useState(0)
    const [product_image, setImage] = useState('')
    const [product_description, setDescription] = useState('')

   
    const dispatch = useDispatch()

    const getData = (e: any) => {
        e.preventDefault();
        // dispatch(add_product_data({
        //    product_name: product_name, product_price: product_price, product_image: product_image, product_description: product_description
        //   }))
        
    }

    return(
        <div>
            <h1>Add Products</h1>
            <form onSubmit={getData}>
       
            Product Name<input type="text" name="product_name" value={product_name} onChange={(e)=>{ setName(e.target.value)}} placeholder="Enter product name"/><br />
            Product Price<input type="number" name="product_price" value={product_price} onChange={(e)=>{ setPrice(+e.target.value)}} placeholder="Enter price of product"/><br />
            Image Url<input type="text"  name="product_image" value={product_image} onChange={(e)=>{ setImage(e.target.value)}}placeholder="Enter image url"/><br />
            Description<input type="text"  name="product_description" value={product_description} onChange={(e)=>{ setDescription(e.target.value)}} placeholder="Image description"/><br />
            <button>Add Product</button>
            </form>
        </div>
    )
}
export default Products;