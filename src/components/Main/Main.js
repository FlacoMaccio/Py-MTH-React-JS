import Navbar from "../Navbar/NavBar";
import "./Main.css";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import CartProvider from "../Provider/CartProvider";



function Main() {
    return (
    <CartProvider defaultValue = {[]}>
      <BrowserRouter>
        <Navbar />
        
        <Switch>
          <Route exact path="/">
            <div className="Home">
              <ItemListContainer />
            </div>
          </Route>
          <Route exact path="/ItemListContainer/">
            <ItemListContainer />
          </Route>

          <Route exact path="/item/:itemId">
            <ItemDetailContainer />
          </Route>

          <Route exact path="/ItemList">
            <ItemListContainer />
          </Route>

          <Route exact path="/category/:categoryid">
            <ItemListContainer/>
          </Route>


        </Switch>
        
      </BrowserRouter>
    </CartProvider>
  );
}

export default Main;
