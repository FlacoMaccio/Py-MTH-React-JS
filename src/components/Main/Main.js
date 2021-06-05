import Navbar from "../Navbar/NavBar";
import './Main.css';
import ItemListContainer from '../ItemListContainer';

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



{/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */}