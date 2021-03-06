import React, { useState } from "react"
import styled from "styled-components"
import Modal from "../common/modal/Modal"

import {sendNewsLetterEmail} from '../../utils/email'
import {encode} from '../../utils/encoding'
const INVALID_EMAIL = "Please put a valid email"
const REGISTERING = "Registering..."
const THANKS = "Thank you for registering to our newsletter"
const ERROR_SEND = "Error while sending your email";

const NewsLetter = ({content}) => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState({
    isError: true,
    msg: INVALID_EMAIL,
  })
  const [showModal, setShowModal] = useState({ show: false, msg: "" })
  const validEmail = () => {
    let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    if (!valid) setError({ isError: true, msg: INVALID_EMAIL })
    return valid
  }
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    if (!validEmail()) {
      setShowModal({ show: true, msg: error.msg })
    } else {
      /// async request to endpoint
      setShowModal({ show: true, msg: REGISTERING })
      subscribeToNewsLetter()
        .then(res => {
                setError({ isError: false })
          setShowModal({ show: true, msg: THANKS })
          setTimeout(() => reset(), 5000)
        })
        .catch(err => {
          setError({ isError: true })
          setShowModal({ show: true, msg: ERROR_SEND })
        })
      // fetch("/", {
      //   method: "post",
      //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
      //   body: encode({ "form-name": form.getAttribute('name'), ...{email : email} })
      // })
      //   .then((res) => {
      //     setError({ isError: false })
      //     setShowModal({ show: true, msg: THANKS })
      //     setTimeout(() => reset(), 5000)
      //   })
      //   .catch(error => {
      //     setError({ isError: true })
      //     setShowModal({ show: true, msg: ERROR_SEND })
      //   });
    }
  }
  const reset = () => {
    setEmail("")
    setError({ isError: true, msg: INVALID_EMAIL })
    setShowModal({show: false , msg: ''})
  }
  const subscribeToNewsLetter =()=>{
    let templateParams = {
      from_name: email,
      to_name: "Abdellah Nassim Meridja",
      subject: "Newslettter Subscription from personal site",
      message_html: `Email ${email} just subscribed to the newsletter`
    };
    return sendNewsLetterEmail(templateParams)
  }
  return (
    <StyledDiv>
      {showModal.show ? (
        <Modal
          corner="bottom-left"
          error={error.isError}
          close={e => setShowModal(false)}
        >
          {showModal.msg}
        </Modal>
      ) : null}
      <h1 className="title">{content.header}</h1>
      <p className="info">{content.text}</p>
      <form  name="newsletter"  onSubmit={handleSubmit}  method ="POST">
        <input
          name="email"
          placeholder="Email"
          type="email"
          id="emailAdr"
          value={email}
          onChange={e => {
            e.preventDefault()
            setEmail(e.target.value)
          }}
        />
        <StyledButton type="submit" >{content.buttontext}</StyledButton>
      </form>
    </StyledDiv>
  )
}
const StyledDiv = styled.div`
  font-family: var(--font);
  height: auto;
  position :relative;
  width: 100%;
  text-align: center;
  margin-top: 2vw;
  padding-top: 3vw;
  padding-bottom: 6vw;
  margin-bottom: -2.4vw;
  input[type="email"] {
    height: 3vw;
    width: 26vw;
    background-color: inherit;
   outline : none;
    border: solid 1px var(--green);
    color: var(--green);
    padding-left: 1vw;
    vertical-align: middle;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .title {
    font-size: 3rem;
  }
  .info {
    font-size: 1.1rem;
    margin-bottom: 1.4rem;
  }
  @media (max-width: 768px) {
    text-align: left;
    padding-left: 4vw;
    padding-right: 4vw;
    padding-bottom: 12vw;
    input[type="email"] {
      height: 8vw;
      width: 100%;
      outline: none;
      border: solid 1px var(--green);
      
      color: var(--green);
      padding-left: 4vw;
      border-radius: 1.6vw;
      margin-bottom: 3vw;
    }

    .title {
      font-size: 2.8rem;
      margin-bottom: 3vw;
    }
    .info {
      font-size: 0.8rem;
      margin-bottom: 1.2vw;
    }
  }
`
const StyledButton = styled.button`
  font-family: var(--font-header);
  height: 3vw;
  width: 8vw;
  color: var(--grey-dark);
  background-color: var(--green-light);
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  outline: none;
  
  vertical-align: middle;
  @media (max-width: 768px) {
    height: 8vw;
    width: 38%;
    border-radius: 1.6vw;
  }
`
export default NewsLetter
