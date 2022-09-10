import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Navbar/Main';
import Service from './Components/Navbar/Service/Service';
import data from './Components/Navbar/Service/data';
// import { hexDataLength } from 'ethers/lib/utils';
import Experience from './Components/Navbar/Experience/Experience';
import Client from './Components/Navbar/Client/Client';

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Service />
      <Experience />
      <Client />
    </>
  );
}

export default App;
