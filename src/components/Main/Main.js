import Navbar from "../Navbar/NavBar";
import "./Main.css";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemList from "../ItemList/ItemList";


function Main() {
  return (
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

        <Route exact epath="/ItemList">
          <ItemList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Main;
