import React, { useState, useEffect } from "react";
import "./Register.css";
import { CustomInput } from "../../common/CustomInput/CustomInput";
import { registerUser } from "../../services/apiCalls";
import { useNavigate } from 'react-router-dom';
import { validator } from "../../services/useful";

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
      [e.target.name]: e.target.value
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

    registerUser(credenciales)
        .then(
            resultado => {                           
                setTimeout(()=>{
                    navigate("/login");
                },500);
            }
        )
        .catch(error => console.log(error));

  }

  return (
    <div className="registerDesign">
      <CustomInput
        design={`inputDesign ${userError.usernameError !== "" ? 'inputDesignError' : ''}`}
        type={"string"}
        name={"username"}
        placeholder={""}
        // value={}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      <div className='errorMsg'>{userError.usernameError}</div>
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
      <CustomInput
        design={`inputDesign ${userError.phone_numberError !== "" ? 'inputDesignError' : ''}`}
        type={"phone"}
        name={"phone_number"}
        placeholder={""}
        // value={}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      <div className='errorMsg'>{userError.phone_numberError}</div>
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
      <div className='buttonSubmit' onClick={Submit}>Submit</div>
    </div>
  );
};
