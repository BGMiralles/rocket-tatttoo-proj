import React, { useState } from "react";
import "./Register.css";
import { CustomInput } from "../../common/CustomInput/CustomInput";
import { validator } from "../../services/useful";
import { registerUser } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const [userError, setUserError] = useState({
    usernameError: "",
    emailError: "",
    phone_numberError: "",
    passwordError: "",
  });

  const functionHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const errorCheck = (e) => {
    let error = "";

    error = validator(e.target.name, e.target.value);

    setUserError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));
  };

  const Submit = () => {
    for (let test1 in user) {
      if (user[test1] === "") {
        return;
      }
    }

    for (let test in userError) {
      if (userError[test] !== "") {
        return;
      }
    }

    registerUser(user)
      .then((resultado) => {
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="registerDesign">
      <div className="header">Name</div>
      <CustomInput
        disabled={false}
        design={`inputDesign ${
          userError.usernameError !== "" ? "inputDesignError" : ""
        }`}
        type={"text"}
        name={"username"}
        placeholder={""}
        value={""}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      <div
        className={`errorMsgVoid ${
          userError.usernameError !== "" ? "errorMsg" : ""
        }`}
      >
        {userError.usernameError}
      </div>
      <div className="header">Email</div>
      <CustomInput
        disabled={false}
        design={`inputDesign ${
          userError.emailError !== "" ? "inputDesignError" : ""
        }`}
        type={"email"}
        name={"email"}
        placeholder={""}
        value={""}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      <div
        className={`errorMsgVoid ${
          userError.emailError !== "" ? "errorMsg" : ""
        }`}
      >
        {userError.emailError}
      </div>
      <div className="header">Phone Number</div>
      <CustomInput
        disabled={false}
        design={`inputDesign ${
          userError.phone_numberError !== "" ? "inputDesignError" : ""
        }`}
        type={"text"}
        name={"phone_number"}
        placeholder={""}
        value={""}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      <div
        className={`errorMsgVoid ${
          userError.phone_numberError !== "" ? "errorMsg" : ""
        }`}
      >
        {userError.phone_numberError}
      </div>
      <div className="header">Password</div>
      <CustomInput
        disabled={false}
        design={`inputDesign ${
          userError.passwordError !== "" ? "inputDesignError" : ""
        }`}
        type={"password"}
        name={"password"}
        placeholder={""}
        value={""}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      <div
        className={`errorMsgVoid ${
          userError.passwordError !== "" ? "errorMsg" : ""
        }`}
      >
        {userError.passwordError}
      </div>
      <div className="buttonSubmit" onClick={Submit}>
        Submit
      </div>
    </div>
  );
};
