// import logo from './logo.svg';
import './App.css';
// import Navbars from './components/Navbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <div>
        <Hero/>
        </div>
        <div>
        <Sidebar/>
        </div>
      </header>
    </div>
  );
}

export default App;
