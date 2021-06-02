import logo from './logo.svg';
import Navbar from "./components/Navbar/NavBar";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="menu-logo">MTH CarDetail </h1>
      <div className="menu-icon"></div>
      <Navbar />
    </div>
  );
}

export default App;



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