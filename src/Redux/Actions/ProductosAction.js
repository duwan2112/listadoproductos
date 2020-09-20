import {
  AGREGAR_PRODUCTO,
  CARGAR_PRODUCTOS,
  DELETE_PRODUCTO,
  EDITAR_PRODUCTO,
} from "../../types/index";

export function crearProducto(producto) {
  let productos = [];
  const data = window.localStorage.getItem("productos");
  if (data !== null) {
    productos = JSON.parse(data);
  }
  productos.push(producto);
  window.localStorage.setItem("productos", JSON.stringify(productos));

  return (dispatch) => {
    dispatch({
      type: AGREGAR_PRODUCTO,
      payload: productos,
    });
  };
}

export function cargarProductos() {
  const data = JSON.parse(window.localStorage.getItem("productos"));
  return (dispatch) => {
    dispatch({
      type: CARGAR_PRODUCTOS,
      payload: data,
    });
  };
}

export function editarProductos(producto) {
  const data = JSON.parse(window.localStorage.getItem("productos"));
  const dataEdit = data.map((product) =>
    product.id === producto.id ? producto : product
  );
  window.localStorage.setItem("productos", JSON.stringify(dataEdit));
  return (dispatch) => {
    dispatch({
      type: EDITAR_PRODUCTO,
      payload: producto,
    });
  };
}

export function deleteProductos(producto) {
  const data = JSON.parse(window.localStorage.getItem("productos"));
  const dataEdit = data.filter((product) => product.id !== producto.id);

  window.localStorage.setItem("productos", JSON.stringify(dataEdit));

  return (dispatch) => {
    dispatch({
      type: DELETE_PRODUCTO,
      payload: producto,
    });
  };
}
