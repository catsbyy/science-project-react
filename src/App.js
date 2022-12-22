import "./styles/main.css";

import Navbar from "./components/navbar/Navbar.js";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Business from "./pages/Business";
import Student from "./pages/Student";
import SuccessfulRegistration from "./pages/SuccessfulRegistration";

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
