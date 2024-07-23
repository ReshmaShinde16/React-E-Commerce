import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useGetProductList } from "../Productlist/selector/productlist.selector";
import { add_product_data } from "../Productlist/store/Productlist.store";


const Productlist: React.FC = () => {
  let apidata:any
  let setApidata:any
     [apidata, setApidata] = useState([]);
    const dispatch=useDispatch()
    const state=useGetProductList()
    useEffect(() => {
        fetchData();
      }, [])
      
      useEffect(()=>{
        console.log(state);
        
      },[state])
      
      
    const fetchData = async () => {
        try {
          const Apidata:any = await axios.get(`http://localhost:4000/product`)
        //   console.log("what ",data);
        // setApidata(Apidata.data)
        // console.log(apidata);
        
        dispatch(add_product_data(Apidata.data.data))
        console.log("ddd",apidata);
        
        }
        catch (err) {
          console.log(err);
        }
      }
    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Product Image</th>
                    <th>Product Description</th>
                </tr> 
                </thead>
                <tbody>
                 {
                  state.map((d:any,i:any)=>{
                    return(
                        <tr key={i}>
                            <td>{d.product_name}</td>
                            <td>{d.product_price}</td>
                            <td><img src={d.product_image}/></td>
                            <td>{d.product_description}</td>
                        </tr>
                    )
                   })
                } 
                </tbody>
             </table>
        </div>
    )
}
export default Productlist