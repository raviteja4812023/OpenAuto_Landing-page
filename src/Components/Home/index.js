import React, { useState } from 'react';
import "./index.css"
import Navbar from "../Navbar"
import Pickup from "./Pickup_Illustration.png"
import picku from "./picku service.png"
import { FiFacebook } from 'react-icons/fi';
import {BsYoutube,BsInstagram} from "react-icons/bs"
import {AiOutlineTwitter,AiFillLinkedin} from "react-icons/ai"
import {BsTelephone} from "react-icons/bs"
import {GoMail} from "react-icons/go"

const Home=()=>{
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            setNameError("Name is required");
        } else {
            setNameError("");
        }
        if (!email) {
            setEmailError("Email is required");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Invalid email format");
        } else {
            setEmailError("");
        }
        fetch('/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email }),
          })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.error(err));
    }

    return(
        <>
        <div className="landing-page-container">
        <Navbar />
            <div className="landing-page-1">
                <div className="open-auto-container">
                <h1 className="open-auto-heading">Vehicle Maintenance 
                <br/>From the Comfort of 
                <br/>Your Home</h1>
                <p className="open-auto-description">Open Auto Soothes the hassle of Maintaining your vehicle and 
                <br/>helps you deal with unexpected repairs worry-free.
                </p>
                <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Your Name"
        className="input-element"
        value={name}
        onChange={handleNameChange}
      />
      {nameError && <div className="error-message">{nameError}</div>}
      <input
        type="text"
        placeholder="Enter Your Email"
        className="input-element"
        value={email}
        onChange={handleEmailChange}
      />
      {emailError && <div className="error-message">{emailError}</div>}
      <button className="submit-button">Submit</button>
    </form>
            </div>
            <img src={Pickup} alt="logo" className="image-1"/>
            </div>
            <div className="logo-container">
                <FiFacebook className="logo"/> 
                <AiOutlineTwitter className="logo"/>
                <BsYoutube className="logo"/>
                <AiFillLinkedin className="logo"/>
                <BsInstagram className="logo"/>
            </div>
            <hr className="horizontal-line"/>
            <div className="time-saving-container">
                <img src={picku} alt="phone" className="image-2"/>
                <div className="time-saving-content">
                    <h2 className="time-saving-heading">Focused On 
                    <br/>Time Saving</h2>
                    <p className="time-saving-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem <br/>
                    has been the industry's standard dummy text  ever since the 1500 when an <br/>
                    When an unknown printer took a galley of type and book.</p>
                    <button className="download-button">Download the mobile app</button>
                </div>
            </div>
            <div className="bottom-navbar">
                <h3 className="bottom-heading">PENAUTO</h3>
                <div className="services">
                    <span className="phone"><BsTelephone className="logos"/>+769 586 4558</span>
                    <span className="service"><GoMail className="logos"/>Service@openauto</span>
                </div>
            </div>
            <div className='bottom-logos'>
            <p className="right">Open Auto @ all rights reserved</p>
            <div className='conditions'>
                <p className='policy'>privacy policy</p>
                <p className='policy'>Terms of use</p>
                <p className='policy'>Cookie Policy</p>
            </div>
                <div className="logo-container-2">
                <FiFacebook className="logo"/> 
                <AiOutlineTwitter className="logo"/>
                <BsYoutube className="logo"/>
                <AiFillLinkedin className="logo"/>
                <BsInstagram className="logo"/>
            </div>
            </div>
        </div>
        </>
    )
}
export default Home