import React, { useEffect } from "react";
import Header from "../Header/Header";
import Product from "./Product";
import "./ListProductsStyle.css";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cargarProductos } from "../../Redux/Actions/ProductosAction";
export default function ListProducts() {
  const listProducts = useSelector((state) => state.productos.productos);

  const dispatch = useDispatch();

  useEffect(() => {
    if (listProducts.length === 0) return dispatch(cargarProductos());
    //eslint-disable-next-line
  }, []);
  let i = 0;

  const history = useHistory();
  const onClickEditar = (id) => {
    history.push(`/products/edit/${id}`);
  };

  const onClickDelete = (id) => {
    history.push(`/products/delete/${id}`);
  };

  return (
    <>
      <Header />
      <div className="container-list">
        <ul className="list">
          <li className="initial">
            <div className="container">
              <p>Name</p> <p> Price</p>
            </div>
          </li>
          {listProducts !== null
            ? listProducts.map((product) => {
                i++;

                return (
                  <li
                    className={`product ${i % 2 === 0 ? "fondo-d" : "fondo-l"}`}
                    key={product.id}
                  >
                    <div className="container">
                      <Product product={product} key={product.id} />
                    </div>
                    <div className="settings">
                      <button
                        onClick={() => {
                          onClickEditar(product.id);
                        }}
                        className="editar"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => {
                          onClickDelete(product.id);
                        }}
                        className="eliminar"
                      >
                        Eliminar
                      </button>{" "}
                    </div>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
      <div className="add">
        <Link to="/products/new" className="add-product">
          ADD PRODUCT
        </Link>
      </div>
    </>
  );
}
