import Landing from './pages/Landing';
import Navbar from './pages/navbar/Navbar';
import About from './pages/about/About';
import Price from './pages/Price';
import Dates from './pages/Dates';
import Application from './pages/Application';
import Footer from './pages/footer/Footer';
import './App.css'

function App() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet"></link>
      <Landing />
      <Navbar />
      <About />
      <Price />
      <Dates />
      <Application />
      <Footer />
    </>
  );
}

export default App;