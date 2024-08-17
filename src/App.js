import logo from './logo.svg';
import Header from "./components/header/header.jsx";
import Body from "./components/body/body.jsx";
import Footer from "./components/footer/footer.jsx";
import { FaWhatsapp } from "react-icons/fa";
function App() {
  return (
    <>
    <div className='whatsapp-share-button'><a href='whatsapp://send?text=https://fron-pardar.vercel.app/'><FaWhatsapp/></a></div>
      <Header />
      <Body />
      <Footer/>
    </>
  );
}

export default App;