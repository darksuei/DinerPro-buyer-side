import Navbar from "./Navbar/navbar";
import Footer from "./Footer/Footer";

export default function Layout({children}) {
    return (
      <>
        <Navbar/>
        {children}
        <Footer/>
      </>
    );
  }
  