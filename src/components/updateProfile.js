
import React from "react";
import "./updateProfile.css";

export default function Update() {

  function handleProfile(event) {
    event.preventDefault();
  }

  return (
    <div className="profile-page">
      <div className="profile-page-container">
        <h1>Profile</h1>
        <form onSubmit={handleProfile}>
          <div>
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              id="fullName"
              className="form-control"
              type="text"
              name="fullName"
              required
            ></input>
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
              required
            ></input>
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
              required
            ></input>
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
              required
              pattern="^[0][0-9]{9}$"
            ></input>
          </div>
          <div className="btn-action" >
          <button type="submit" className="btn-update">
            Update
          </button>
          <button type="submit" className="btn-cancle">
            Cancle
          </button>
          </div>

        </form>
      </div>
    </div>
  );
}

