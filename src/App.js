import React from "react";
import ListProducts from "./Components/ListProducts/ListProducts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProducts from "./Components/AddProducts/AddProducts";
import { Provider } from "react-redux";
import store from "./Redux/store";
import EditProducts from "./Components/EditProducts/EditProducts";
import DeleteProducts from "./Components/Deleteproducts/DeleteProducts";
import RoutePrivate from "./Components/RoutePrivate/RoutePrivate";
function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <Switch>
            {" "}
            <Route exact path="/" component={ListProducts} />
            <Route exact path="/products/new" component={AddProducts} />
            <RoutePrivate
              exact
              path="/products/edit/:id"
              component={EditProducts}
            />
            <RoutePrivate
              exact
              path="/products/delete/:id"
              component={DeleteProducts}
            />
          </Switch>
        </Provider>
      </Router>
    </>
  );
}

export default App;
