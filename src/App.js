import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contect from "./components/Contect";
import Footer from "./components/Footer";
import ReactGA from "react-ga4"


function App() {

  //for dark mode
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




const TRACKING_ID = "UA-269857130-5"
// const TRACKING_ID = "G-W0TJ3QH9HQ"


// const TRACKING_ID = "G-PYYLRMZ35X"
// const TRACKING_ID = "G-NLF7Y5MW19"
// const TRACKING_ID = "G-MKTNMH95X4"
// const TRACKING_ID = "G-L8BT9X4VZB"
// const TRACKING_ID = "UA-269857130-3"
// const TRACKING_ID = "UA-269857130-2"
ReactGA.initialize(TRACKING_ID);


  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";


  return (
    <>
      {/* <Navbar theme={mode} toggal={handalchange}/> */}

      <Navbar />
      {/* <Alert /> */}
      <Home />
      <About />
      <Contect  />
      <Footer />
    </>
  
  );
}

export default App;
