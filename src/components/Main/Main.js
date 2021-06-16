import Navbar from "../Navbar/NavBar";
import "./Main.css";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "../ItemList/ItemDetailContainer";

function Main() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <h1 className="menu-logo"> MTH CarDetail </h1>
            <div className="menu-icon"></div>
            <Navbar />
            <ItemListContainer />
          </div>
        </Route>
        <Route exact epath="/ItemDetailContainer">
          <ItemDetailContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Main;
