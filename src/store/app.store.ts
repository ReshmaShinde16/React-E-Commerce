import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../Pages/Productlist/store/Productlist.store";
const AppStore = configureStore({
  reducer: {
    product: ProductReducer,
  },
});
export default AppStore;
