import Navbar from "./Navbar/navbar";
import Footer from "./Footer/Footer";
import Question from "./question";
import { useState } from "react";

export default function Layout({ children }) {
  const [authenticate, setAuthenticate] = useState(false);
  return (
    <>
      <Navbar authenticate={authenticate} />
      {children}
      <Question />
      <Footer />
    </>
  );
}
