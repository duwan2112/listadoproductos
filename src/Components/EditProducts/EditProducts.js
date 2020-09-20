import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editarProductos } from "../../Redux/Actions/ProductosAction";
export default function EditProducts() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.productos.productos);
  const productSelect = products.find((product) => product.id === id);

  const [form, setForm] = useState({
    nombre: "",
    price: "",
    id: " ",
  });
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (productSelect !== "undefined") {
      setForm(productSelect);
    }
  }, [productSelect]);

  const onClick = () => {
    history.push("/");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.nombre.trim() && form.price.trim()) {
      dispatch(editarProductos(form));
      history.push("/");
    }
  };

  return (
    <>
      <button className="back" onClick={onClick}>
        <ArrowBackIcon />{" "}
      </button>
      <div className="container-header">Editar un producto</div>
      <form onSubmit={onSubmit} className="container-form">
        <div className="container-input">
          <label htmlFor="nombre">Nombre del Producto</label>
          <input
            onChange={onChange}
            value={form.nombre}
            name="nombre"
            placeholder="Nombre del producto"
            type="text"
          />
        </div>

        <div className="container-input">
          <label htmlFor="price">Precio del producto</label>
          <input
            onChange={onChange}
            value={form.price}
            name="price"
            id="price"
            placeholder="Precio del producto"
            type="number"
          />
        </div>
        <input className="send" type="submit" value="Editar Producto" />
      </form>
    </>
  );
}
