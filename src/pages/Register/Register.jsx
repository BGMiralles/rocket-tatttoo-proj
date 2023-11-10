import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./Register.css";
import { CustomInput } from "../../common/CustomInput/CustomInput";
import { registerUser } from "../../services/apiCalls";
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
    let error = ""
    error = validator(e.target.name, e.target.value)
  }

//   useEffect(()=>{
//     console.log(credenciales);
//   },[credenciales]);

  const registerMe = () => {

    registerUser(user)
        .then(
            resultado => {
                console.log(resultado)
                //Aqui guardaría el token........

                //Una vez guardado el token....nos vamos a home....
                setTimeout(()=>{
                    navigate("/login");
                },500);
            }
        )
        .catch(error => console.log(error));

  }

  return (
    <div className="loginDesign">
      <CustomInput
        design={"inputDesign"}
        type={"text"}
        name={"username"}
        placeholder={""}
        // value={}
        functionProp={functionHandler}
        funtionBlur={errorCheck}
      />
      <div>{userError.usernameError}</div>
      <CustomInput
        design={"inputDesign"}
        type={"email"}
        name={"email"}
        placeholder={""}
        // value={}
        functionProp={functionHandler}
        funtionBlur={errorCheck}
      />
      <div>{userError.emailError}</div>
      <CustomInput
        design={"inputDesign"}
        type={"text"}
        name={"phone_number"}
        placeholder={""}
        // value={}
        functionProp={functionHandler}
        funtionBlur={errorCheck}
      />
      <div>{userError.phone_numberError}</div>
      <CustomInput
        design={"inputDesign"}
        type={"password"}
        name={"password"}
        placeholder={""}
        // value={}
        functionProp={functionHandler}
        funtionBlur={errorCheck}
      />
      <div>{userError.passwordError}</div>
      <div className='buttonSubmit' onClick={registerMe}>Register Me!</div>
    </div>
  );
};
