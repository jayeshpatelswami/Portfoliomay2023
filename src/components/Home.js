import React, { useEffect } from "react";
import "./home.css";
import imgsrc from "./patel.jpg";
import ReactGA from "react-ga"


export default function Home() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
   
  }, [])

const handaldownload =()=>{
  ReactGA.event({
    category:"Clicked by user",
    action:"send POrtfoli",
    label:"none",
    value:"none"
  })
}
  
  return (
    <>
      <div id="home" className=" mt-5">
        <div className="hris">
          <hr className="center d-none" />
        </div>

        <div className="container my-5">
          <h1 className="para  capi pt-5"> Hello , I am Jayesh Patel </h1>
          <h3 className="para capi py-2 mx-1">
         
            I am a Full Stack Web developer and React Developer and gamer.
          </h3>
          <button className="btn btn-dark" onClick={handaldownload}>Download </button>
        </div>
        <div>
          <img
            src={imgsrc}
            alt="hello"
            style={{ width: "100%", height: "50%" }}
          />
        </div>
      </div>
    </>
  );
}
