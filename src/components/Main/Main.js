import Navbar from "../Navbar/NavBar";
import './Main.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

function Main() {
  return (
    <div className="App">
      <h1 className="menu-logo"> MTH CarDetail </h1>
      <div className="menu-icon"></div>
      <Navbar />
      <ItemListContainer />
    </div>
  );
}


export default Main;



