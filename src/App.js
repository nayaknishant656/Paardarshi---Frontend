import logo from './logo.svg';
import Header from "./components/header/header.jsx";
import Body from "./components/body/body.jsx";
import Footer from "./components/footer/footer.jsx";
import Certificate from "./components/certificate/certificate.jsx"
import { FaWhatsapp } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <div className='whatsapp-share-button'><a href='whatsapp://send?text=https://fron-pardar.vercel.app/'><FaWhatsapp /></a></div>
      <Header />
      <Routes>
         <Route exact path="/" element={<Body/>}  />
         <Route exact path="/jamin" element={<Certificate/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;