import './App.css';
import Navbar from './compoennets/Navbar/Index';
import TextField from './compoennets/TextField/Index';

function App() {
  return (
    <div className="App">
      <Navbar navbarTitle="Text Analyzer" linkOne="Home" linkTwo="Profile" linkThree="Contact Me" />
      <TextField  cname/>

    </div>
  );
}

export default App;
