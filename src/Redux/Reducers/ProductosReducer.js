//Cada reducer tiene un state propio

import {
  AGREGAR_PRODUCTO,
  CARGAR_PRODUCTOS,
  EDITAR_PRODUCTO,
  DELETE_PRODUCTO,
} from "../../types/index";

const initialState = {
  productos: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        productos: action.payload,
      };
    case CARGAR_PRODUCTOS:
      return {
        ...state,
        productos: action.payload,
      };

    case EDITAR_PRODUCTO:
      return {
        ...state,
        productos: state.productos.map((producto) =>
          producto.id === action.payload.id ? action.payload : producto
        ),
      };
    case DELETE_PRODUCTO:
      return {
        ...state,
        productos: state.productos.filter(
          (producto) => producto.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
