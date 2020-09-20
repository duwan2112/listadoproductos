import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useDispatch } from "react-redux";
import { crearProducto } from "../../Redux/Actions/ProductosAction";
import shortid from "shortid";
export default function AddProducts() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [form, setForm] = useState({ nombre: "", price: "", id: null });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setForm({ ...form, id: shortid.generate() });
    //eslint-disable-next-line
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.nombre.trim() && form.price.trim()) {
      dispatch(crearProducto(form));
      history.push("/");
      setForm({ nombre: "", price: "", id: shortid.generate() });
    }
  };
  const onClick = () => {
    history.push("/");
  };
  return (
    <>
      <button className="back" onClick={onClick}>
        <ArrowBackIcon />{" "}
      </button>
      <div className="container-header">Añade un producto</div>
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
        <input className="send" type="submit" value="Agregar Productos" />
      </form>
    </>
  );
}
