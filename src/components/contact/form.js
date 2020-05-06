import React,{useState} from "react"
import styled from "styled-components"
import Modal from "../common/modal/Modal";
import {encode} from '../../utils/encoding'
import {sendContactEmail} from '../../utils/email'
const Form = (props)=>{

  const [fields , setFields] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors,setErrors] = useState({
    name:"" ,
    email :"",
    message :""
  });
  const [showModal , setShowModal] = useState(false);
  const [modalMsg, setModalMsg] = useState('');
  const [submited,setSubmited] = useState(false);
  const hasError = errors => {
    return (
      errors.name ||
      errors.message ||
      errors.email
    )
  }
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target
    let errors = {
      name:"" ,
      email :"",
      message :""
    }
    if( ! fields.name) {
      errors ={...errors , name:"The name field is required"}
    
    }
    if( ! fields.email) {
      errors ={...errors , email:"The email field is required"}
   
    }
    if( ! fields.message) {
      errors ={...errors , message:"The message field is required"}
 
    }
  
   
    if (hasError(errors)) {
      setErrors(errors);
      setShowModal(true);
      setSubmited(false);
      setModalMsg("Please fix the errors before submiting");
    } else if (fields.message === "") {
      setSubmited(false);
      setShowModal(true);
      setModalMsg('Please type a message')
    } else {
      setErrors({
        name:"" ,
        email :"",
        message :""
      })
      setFields({
        name:"" ,
        email :"",
        message :""
      })
      setSubmited(false)
      setShowModal(true)
      setModalMsg("Sending your email...")
      sendEmail()
        .then(res => {
          setSubmited(true)
              setShowModal(true)
              setModalMsg("Thank you for submiting , we will reach out to you ")
        }).catch(err => {
          setSubmited(false)
          setShowModal(true)
          setModalMsg("Error occured , we could'nt send your message ")
        })
      // fetch("/", {
      //   method: "post",
      //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
      //   body: encode({ "form-name": form.getAttribute('name'), ...fields })
      // })
      //   .then((res) => {
      //     setSubmited(true)
      //     setShowModal(true)
      //     setModalMsg("Thank you for submiting , we will reach out to you ")
      //   })
      //   .catch(error => {
      //     setSubmited(false)
      //     setShowModal(true)
      //     setModalMsg("Error occured , we could'nt send your message ")
      //   });

      
     
    }
  }

  const sendEmail =()=>{
    
    let templateParams = {
      from_name: `${fields.name +" " + fields.email}`,
      to_name: "Abdellah Meridja",
      subject: "New Personal Website Contact",
      message_html: fields.message
    };
    return sendContactEmail(templateParams)
  }
  const handleChange = e => {
    setFields({...fields ,[e.target.name ]: [e.target.value] });
    setErrors({...errors , [e.target.name] : ""}) /// removing the error
  }

  return (
    <div style={{ backgroundColor: "inherit" }}>
      <StyledForm
        className="contact-form"
        name="contact-me"
        method ="POST"
        onSubmit={handleSubmit}
      >
        <div className="input-row ">
          <input
            className={`${errors.name ? "error-border" : ""}`}
            name="name"
            placeholder="Name"
            type="text"
            id="name"
        
            onChange={e=>handleChange(e)}
            value={fields.name}
          />
        </div>
        <p className="error">
          {errors.name ? errors.name : ""}
        </p>
        <div className="input-row ">
          <input
            className={`${errors.email ? "error-border" : ""}`}
            name="email"
            placeholder="Email"
            type="email"
            id="email"

            onChange={e=>handleChange(e)}
            value={fields.email}
          />
        </div>
        <p className="error">
          {errors.email ? errors.email : ""}
        </p>
        <div>
          <textarea
            className={`textarea ${
              errors.message ? "error-border" : ""
            }`}
            name="message"
            rows="5"
            placeholder="Type something..."
            id="message"
            onChange={e=>handleChange(e)}
            value={fields.message}
          />
        </div>
        <p className="error">
          {errors.message ? errors.message : ""}
        </p>
        <div>
          <StyledButton className="button-row" type="submit">
            Send
          </StyledButton>
        </div>
      </StyledForm>
      {showModal && (
        <Modal
          error={!submited }
          close={e => setShowModal(false)}
        >
          {modalMsg}
        </Modal>
      ) }
    </div>
  )
}

const StyledForm = styled.form`
  font-family: var(--font);
  position :relative ;
  z-index :1;
  input[type="text"],
  textarea,
  input[type="email"] {
    position :relative ;
  z-index :1;
    width: 100%;
    padding-left: 2vw;
    font-size: 20px;
    border: solid 1px rgba(128,128,128,0.5);
    background-color: inherit;
    resize: none;
    color: #9d9c9c;
    border-radius: 0.5vw;
    transition: border-color 1s ease;
    &:focus {
      border-color: var(--green);
    }
    &.error-border {
      border-color: var(--red);
    }
  }

  input[type="text"],
  input[type="email"] {
    height: 3vw;
    margin-bottom: 0;
  }

  .error-border {
    border-color: var(--red);
  }
  .textarea {
    height: 16vw;
    padding-top: 1vw;
    margin-bottom: 0;
  }

  input:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  width: 40vw;
  height: 38vw;
  font-size: 2vw;
  line-height: 1.22;
  margin: 0 auto;
  padding: 2vw;
  top: "";

  .input-row,
  .textarea-row,
  .button-row {
    margin-bottom: 1vw;
  }
  .error {
    font-size: 14px;
    color: var(--red);
  }
  @media (max-width: 768px) {
    height : auto ;
    min-height:80vw;
    input[type="text"],
    input[type="email"] {
      height: 8vw;
      padding : 30px;
      font-size : 14px;
      border-radius: 5vw;
    }

    textarea {
      padding :0 30px;
      font-size : 14px;
      border-radius: 2vw;
    }

    .textarea {
      height: 35vw;
      padding-top: 30px;
    }

    width: 80vw;

    font-size: 3vw;

    .input-row,
    .textarea-row,
    .button-row {
      margin-bottom: 3vw;
    }
  }
`
const StyledButton = styled.button`
  width: 100%;
  position :relative ;
  z-index :1;
  height: 3vw;
  border: none;
  background-color: var(--green);
  font-family: var(--font-header);
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  margin-top: 1vw;
  border-radius: 3vw;
  @media (max-width: 768px) {
    height: 8vw;
    border-radius: 5vw;
  }
`
export default Form
