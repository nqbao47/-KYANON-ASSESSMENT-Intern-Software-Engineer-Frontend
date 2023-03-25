import React, { useState, useRef } from "react";
import "./updateProfile.css";

export default function UpdateProfile() {
  const [fullName, setFullName] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const formRef = useRef();

  function handleFullNameChange(event) {
    setFullName(event.target.value);
  };

  function handleBirthDayChange(event) {
    setBirthDay(event.target.value);
  };

  function handleEmailChange(event) {
    setEmail(event.target.value);
  };

  function handlePhoneNumberChange(event) {
    setPhoneNumber(event.target.value);
  };

  function handleProfileUpdate(event) {
    event.preventDefault();
    console.log('form value: ', fullName);
    console.log('form value: ', birthDay);
    console.log('form value: ', email);
    console.log('form value: ', phoneNumber);
  };

  function handleCancel(){
    console.log("Cancel button clicked!");
    setFullName("");
    setBirthDay("");
    setEmail("");
    setPhoneNumber("");
    formRef.current.reset();
  };

  return (
    <div className="profile-page">
      <div className="profile-page-container">
        <h1>Profile</h1>
        <form ref={formRef} onSubmit={handleProfileUpdate} >
          <div>
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              id="fullName"
              className="form-control"
              type="text"
              name="fullName"
              value={fullName}
              onChange={handleFullNameChange}
              required
            />
          </div>
          <div>
            <label htmlFor="birthDay" className="form-label">
              Day of Birth
            </label>
            <input
              id="birthDay"
              className="form-control"
              type="day"
              name="birthDay"
              value={birthDay}
              onChange={handleBirthDayChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              className="form-control"
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="form-label">
              Phone
            </label>
            <input
              id="phoneNumber"
              className="form-control"
              type="tel"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
              pattern="^[0][0-9]{9}$"
            />
          </div>
          <div className="btn-action">
            <button type="submit" className="btn-update">
              Update
            </button>
            <button type="button" className="btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

