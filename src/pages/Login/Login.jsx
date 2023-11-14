import React, { useState, useEffect } from "react";
import "./Login.css";

import { CustomInput } from "../../common/CustomInput/CustomInput";
import { validator } from "../../services/useful";
import { registerUser } from "../../services/apiCalls";
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  })

  const [userError, setUserError] = useState({
    nameError: '',
    emailError: '',
    passwordError: '',
    phoneError: ''
  })


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
        [e.target.name + 'Error']: error,
    }));
  }

  const Submit = () => {

    for(let test1 in user){
      if(user[test1] === ""){
        return;
      }

    }

    for(let test in userError){
      if(userError[test] !== ""){
        return;
      }
    }

    registerUser(user)
      .then(
        resultado => {
          //si todo ha ido bien, redirigiremos a login...
            navigate("/login");          
        }
      )
      .catch(error=> console.log(error));
  }

  return (
    <div className="loginDesign">
      <label>Email</label>
      <CustomInput
        design={`inputDesign ${userError.emailError !== "" ? 'inputDesignError' : ''}`}
        type={"email"}
        name={"email"}
        placeholder={""}
        // value={}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      <div className='errorMsg'>{userError.emailError}</div>
      <label>Password</label>
      <CustomInput
        design={`inputDesign ${userError.passwordError !== "" ? 'inputDesignError' : ''}`}
        type={"password"}
        name={"password"}
        placeholder={""}
        // value={}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      <div className='errorMsg'>{userError.passwordError}</div>
      <div className='buttonSubmit' onClick={Submit}>Login</div>
    </div>
  );
};