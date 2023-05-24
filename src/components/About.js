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
        <div className="container mt-4">
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
                all this are dynamic but it won't reload{" "}
              </span>
            </div>
          </div>
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-border-width"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
                </svg>
              </span>
            </button>
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
