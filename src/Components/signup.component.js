import React, { Component } from "react";
import "../signUpStyle.css";
export default class SignUp extends Component {
  render() {
    return (
      <form>
        <div class="login-card-container">
          <div class="login-card">
            <div class="login-card-header">
              <h1>Sign Up</h1>
              <div>Please Sign Up</div>
            </div>
            <form class="login-card-form">
              <div class="form-item">
                {/* <span class="form-item-icon material-symbols-rounded">
                  mail
                </span> */}
                <input
                  type="text"
                  placeholder="Enter Email"
                  id="emailForm"
                  autofocus
                  required
                />
              </div>
              <div class="form-item">
                {/* <span class="form-item-icon material-symbols-rounded">
                  lock
                </span> */}
                <input
                  type="password"
                  placeholder="Enter Password"
                  id="passwordForm"
                  required
                />
              </div>
              <div class="form-item">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  id="passwordForm"
                  required
                />
              </div>
              <button onclick="signUp()" type="submit">
                Sign Up
              </button>
            </form>
          </div>
          <div class="login-card-social">
            <div>Other Sign-In Options</div>
            <div class="login-card-social-btns">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-google"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
