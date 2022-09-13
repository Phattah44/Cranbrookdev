// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Navbar/Main';
import Service from './Components/Navbar/Service/Service';
import Experience from './Components/Navbar/Experience/Experience';
import Client from './Components/Navbar/Client/Client';
import Course from './Components/Navbar/Courses/Course';
import Footer from './Components/Navbar/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Service />
      <Experience />
      <Client />
      <Course />
      <Footer />
    </>
  );
}

export default App;
