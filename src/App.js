// import logo from './logo.svg';
import './App.css';
import { ReactDOM } from 'react';
// import {Button} from '@mui/material/Button';
// import Navbars from './components/Navbar';
import Navbar from './components/Navbar';
// import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import SimpleContainer from './components/Container';
import Parent from './components/Content'
import { Container } from '@mui/material';
import LandingPage from './components/LandingPage';
// import ButtonUsage from './components/ButtonUsage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
        <SimpleContainer/>
      <header className="App-header">
        <div>
        {/* <Hero/> */}
        </div>
        <div>
        <Parent/>
        <Container>
        <Sidebar/>

        </Container>
        </div>
      </header>
      {/* <ButtonUsage/> */}
    </div>
  );
}

export default App;
