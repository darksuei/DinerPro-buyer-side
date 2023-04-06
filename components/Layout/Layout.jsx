import Navbar from "./Navbar/navbar";
import Footer from "./Footer/Footer";
import Question from "./question";
export default function Layout({children}) {
    return (
      <>
        <Navbar/>
        {children}
        <Question/>
        <Footer/>
      </>
    );
  }
  