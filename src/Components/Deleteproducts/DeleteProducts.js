import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductos } from "../../Redux/Actions/ProductosAction";
export default function DeleteProducts() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  const products = useSelector((state) => state.productos.productos);
  const productSelect = products.find((product) => product.id === id);

  const onClick = () => {
    history.push("/");
  };
  const onClickDelete = () => {
    dispatch(deleteProductos(productSelect));
    history.push("/");
  };
  return (
    <>
      {" "}
      <button className="back" onClick={onClick}>
        <ArrowBackIcon />{" "}
      </button>
      <div className="container-header">Desea Eliminar el Producto?</div>
      <div className="option">
        <button onClick={onClick} className="button cancel">
          Cancelar
        </button>
        <button onClick={onClickDelete} className="button delete">
          {" "}
          Eliminar
        </button>
      </div>
    </>
  );
}
