import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contect from "./components/Contect";
import Footer from "./components/Footer";

function App() {
  
// const [mode,setmode] =useState("light")
// const handalchange = ()=>{
//  if (mode === "light") {
//     setmode('dark')
//     document.body.style.backgroundColor = "black";
//     document.body.style.color="white"
//   }
//   else{
  //     setmode('light')
  //     document.body.style.backgroundColor = "white";
  //     document.body.style.color="black"
  //  }
  // }
  document.body.style.backgroundColor = "black";
       document.body.style.color="white"
  return (
<>

{/* <Navbar theme={mode} toggal={handalchange}/> */}
<Navbar />
<Home  />
<About/>
<Contect/>
<Footer/>
</>
  );
}

export default App;
