import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "./redux/actions/authActions";
import { fetchProducts } from "./redux/actions/productActions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/App.css";

// COMPONENTS
import NavBar from "./components/NavBar";
import Brands from "./components/Brands";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";

// SCREENS
import ProductsScreen from "./screens/ProductsScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import OrdersScreen from "./screens/OrdersScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import CheckoutScreen from "./screens/CheckoutScreen";

const App = () => {
  const [sideToggle, setSideToggle] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <NavBar click={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <Brands />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/cart" exact component={CartScreen} />
          <Route path="/orders" exact component={OrdersScreen} />
          <Route path="/products" exact component={ProductsScreen} />
          <Route path="/product/:id" exact component={ProductDetailsScreen} />
          <Route path="/login" exact component={LoginScreen} />
          <Route path="/register" exact component={RegisterScreen} />
          <Route
            path="/forgotpassword"
            exact
            component={ForgotPasswordScreen}
          />
          <Route
            path="/passwordreset/:resetToken"
            exact
            component={ResetPasswordScreen}
          />
          <Route exact path="/checkout" component={CheckoutScreen} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
