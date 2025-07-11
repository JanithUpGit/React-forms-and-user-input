import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "./hooks/useInput";

export default function StateLogin() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError:emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlepasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError:passwordHasError,
  } = useInput("", (value) => hasMinLength(value,6));


  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValue);
        console.log(emailHasError , passwordHasError);
    if(emailHasError || passwordHasError){
      
    }
    console.log(passwordValue,emailValue )
  }


  


  return (
    <form onSubmit={handleSubmit}>
      <h2>StateLogin</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>

          <Input
            id="email"
            type="email"
            name="email"
            onBlur={handleEmailBlur}
            onChange={handleEmailChange}
            error={emailHasError}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            name="password"
            onBlur={handlePasswordBlur}
            onChange={handlepasswordChange}
            error={passwordHasError}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
