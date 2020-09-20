import { combineReducers } from "redux";
import productosReducer from "./ProductosReducer";

export default combineReducers({
  productos: productosReducer,
});
