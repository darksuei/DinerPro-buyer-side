import Navbar from "./Navbar/navbar";


export default function Layout({children}) {
    return (
      <>
        <Navbar/>
        {children}
      </>
    );
  }
  