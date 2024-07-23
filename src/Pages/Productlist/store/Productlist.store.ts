import { createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Action } from "@reduxjs/toolkit";
interface Porduct {
  product_name: string;
  product_price: number;
  product_image: string;
  product_description: string;
}
const initialState:{products:Porduct[]} = {
  products:[]
};

const ProductReducer = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    add_product_data: (
      state,
      action: PayloadAction<Porduct[]>
    ) => {
    state.products=[...action.payload]
    },
  },
});
export const { add_product_data } = ProductReducer.actions;
export default ProductReducer.reducer;
