import Navbar from "./components/Navbar";
import Home from "./components/Home";
import './output.css'
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import About from "./components/About";
import AboutSorax from "./components/AboutSorax";




function App() {
  return (
    <div className="App">
     
       <Navbar/>
       <Home/>
       <Feature/>
       <About/>
      
       <AboutSorax/>
        <Footer/>
    </div>
  );
}

export default App;
