import React from "react";
import "./home.css";
import Skills from "./Skills";
const About = () => {
  return (
    <>
      <div id="about">
        <div className="hris">
          <hr className="center" />
        </div>

        <div className="container para">
          <h1 className=" capi  mt-5">About Me </h1>
          <h5 className="para capi ">
            I am a full stack web developer and created website with
            html,css,javasript . i also created website with react-js.
          </h5>
          <h6 className="para capi mb-5">
            At this time i am doing Diploma in computer engineering from parul
            university. I learn from youtebe and i created servel website.
          </h6>
        </div>
        {/* <div className="container mt-4">
          <h2 className="capi para  "> I created </h2>

          <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark p-4">
              <h5 class="text-white h4 para capi">my website</h5>
              <h5 className="para capi my-3">
                1. noteBook app : basically it is a MERN stack app. it's an
                incredibal app that you can store your notes without giving
                access to another parson. your note is safe in the website.if
                you login then you can see your notes. i store the data of your
                note in very safe condition and your password will be very high
                protected. by chance someone hackes my website and has acces of
                my database the password are 'salted'(added more securly).
              </h5>
              <h5 className="para capi my-3">
                2. text-converter :it is very useful app that convert's your
                text in uppercase,lowercase and capitalize the text and it is
                very handy because it is very simpal and useful app that tell
                the length of the text and you can copy text from the website
                with the singal click.
              </h5>
              <span class="text-muted para capi">
                all this are dynamic but it won't reload
              </span>
            </div>
          </div>
          <div class="container-fluid">
            <button
              class="navbar-toggler show capi para"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="true"
              aria-label="Toggle navigation"
              
            >
              Press Me
            </button>
          </div>
        </div> */}

        <div className="container mt-4">
        <h2 className="capi para  "> I created </h2>
        <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-border-width" viewBox="0 0 16 16">
  <path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
</svg>
  </button>

  <div class="collapse show bg-dark" id="collapseExample">

    
  <div class="bg-dark p-4">
              <h5 class="text-white h4 para capi">my website</h5>
              <h5 className="para capi my-3">
                1. noteBook app : basically it is a MERN stack app. it's an
                incredibal app that you can store your notes without giving
                access to another parson. your note is safe in the website.if
                you login then you can see your notes. i store the data of your
                note in very safe condition and your password will be very high
                protected. by chance someone hackes my website and has acces of
                my database the password are 'salted'(added more securly).
                 <br/>
                <a className=" link link-secondary link-underline-dark h6 mt-2 mb-4 " href="https://github.com/jayeshpatelswami/Mernnotebookfrontend" target="_blank" rel="noreferrer">  Code : 1 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-file-earmark-code-fill" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.646 7.646a.5.5 0 1 1 .708.708L5.707 10l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 10 8.646 8.354a.5.5 0 1 1 .708-.708z"/>
</svg>  </a>
                <a className="  link link-secondary link-underline-dark h6 mt-2 mb-4 mx-3  " href="https://github.com/jayeshpatelswami/mernnotebookbackend" target="_blank" rel="noreferrer">  Code : 2 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-file-earmark-code-fill" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.646 7.646a.5.5 0 1 1 .708.708L5.707 10l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 10 8.646 8.354a.5.5 0 1 1 .708-.708z"/>
</svg>  </a>
              </h5>
              <h5 className="para capi my-3">
                2. text-converter :it is very useful app that convert's your
                text in uppercase,lowercase and capitalize the text and it is
                very handy because it is very simpal and useful app that tell
                the length of the text and you can copy text from the website
                with the singal click.
                <br/>
                <a className=" link link-secondary link-underline-dark h6 mt-2 mb-4 " href="https://github.com/jayeshpatelswami/text_converter" target="_blank" rel="noreferrer">  Code  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-file-earmark-code-fill" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.646 7.646a.5.5 0 1 1 .708.708L5.707 10l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 10 8.646 8.354a.5.5 0 1 1 .708-.708z"/>
</svg>  </a>
              </h5>
              <h5 className="para capi my-3">
                3. Patel's Akhbar (Newsapp) : It is very useful and free app to read news without seeing ads. i created this app with 'newsapi.com' that the newsapi send the api to my project and my project fetch tat data with easy and give you fress news everyday !
                <br/>
                <a className=" link link-secondary link-underline-dark h6 mt-2 mb-4 " href="https://github.com/jayeshpatelswami/patel_akhbar_newsapp" target="_blank" rel="noreferrer">  Code  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-file-earmark-code-fill" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.646 7.646a.5.5 0 1 1 .708.708L5.707 10l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 10 8.646 8.354a.5.5 0 1 1 .708-.708z"/>
</svg>  </a>
              </h5>
              <h5 className="para capi my-3">
                4.Portfolio : this is just basic Portfolio and i am talking about what you see(this portfolio) ! i uploaded the source code of the portfolio hear you can see or download it .
                <br/>
                <a className=" link link-secondary link-underline-dark h6 mt-2 mb-4 " href="https://github.com/jayeshpatelswami/Portfoliomay2023" target="_blank" rel="noreferrer">  Code  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-file-earmark-code-fill" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.646 7.646a.5.5 0 1 1 .708.708L5.707 10l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 10 8.646 8.354a.5.5 0 1 1 .708-.708z"/>
</svg>  </a>
              </h5>

              <span class="text-muted para capi">
                all this are dynamic but it won't reload. you can copy my code !
              </span>
            </div>
    
            </div>
</div>


        <div className="hris">
          <hr className="center" />
        </div>

        <div className="container mt-4">
          <h3 className="para capi">my skills</h3>
          <Skills />
        </div>

        <div className="hris">
          <hr className="center" />
        </div>
      </div>
    </>
  );
};

export default About;
