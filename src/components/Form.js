
import React, { useRef ,useState } from 'react';
import emailjs from '@emailjs/browser';
import Alert from './Alert';
import ReactGA from "react-ga4"
import "./form.css"

const Form = () => {
    const form = useRef();
    const [info, setinfo] = useState({email : "" ,name : "" , message:""})
    const [alert,setalert] =useState( "d-none")
    const handalsubmit =(e)=>{
      e.preventDefault();
      // console.log(info.name);
      // console.log(info.message);

   
     
       setalert("")

      emailjs.sendForm('service_ihokln8', 'template_olp7sn9', form.current, 'HUohTeyGDyCVs5T6K')
      .then((result) => {
        // console.log(result.text);
        
      ReactGA.event({
        category:info.name,
        action:info.message,
        label:"Form filed by user"
      })
      }, (error) => {
        console.log(error.text);
      });
      
    
     setTimeout(() => {
       setalert("d-none")
     }, 2000);

     setinfo({email : "" ,name : "" , message:""})
    }

    const onchange = (e)=>{
        setinfo({...info , [e.target.name]:e.target.value})
    }

  return (
    <div className='masterForm'>

      
      <div className={`${alert}`}>
  <Alert/>
  </div>
  <div className="containerforForm">
      <form ref={form}  onSubmit={handalsubmit}>
              <div className="mb-3 form-inputs">
                <label htmlFor="name" className="form-label">
                  Your Name or Company Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name='name'
                  value={info.name}
                  aria-describedby="emailHelp" onChange={onchange}
                />
              </div>
              <div className="mb-3 form-inputs">
                <label htmlFor="email" className="form-label">
                  Your Email Or Company Email
                </label>
                <input type="email" className="form-control" id="email" name='email' onChange={onchange} value={info.email}/>
              </div>
              <div className="mb-3 form-inputs">
                <label htmlFor="msg" className="form-label">
                  Type Your Massage
                </label>
                <input type="text" className="form-control" id="msg" name='message' onChange={onchange} value={info.message} />
              </div>

              <button type="submit" className="btn btn-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cursor"
                  viewBox="0 0 16 16"
                >
                  <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z" />
                </svg>
                send message
              </button>
            </form>
            </div>
    </div>
  )
}

export default Form



export const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ihokln8', 'template_olp7sn9', form.current, 'HUohTeyGDyCVs5T6K')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });


        
    };
 
    return (
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" value={""} />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send"  />
      </form>
    );
  };
  