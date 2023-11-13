import React, { useState } from "react";
import "./Register.css";
import { CustomInput } from "../../common/CustomInput/CustomInput";
import { validator } from "../../services/useful";
import { registerUser } from "../../services/apiCalls";
import { useNavigate } from 'react-router-dom';

export const Register = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: '',
    email: '',
    phone_number: '',
    password: '',
  })

  const [userError, setUserError] = useState({
    usernameError: '',
    emailError: '',
    phone_numberError: '',
    passwordError: '',
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

    // for(let test1 in user){
    //   if(user[test1] === ""){
    //     return;
    //   }

    // }

    // for(let test in userError){
    //   if(userError[test] !== ""){
    //     return;
    //   }
    // }

    registerUser(user)
      .then(
        resultado => {
            navigate("/login");          
        }
      )
      .catch(error=> console.log(error));
  }

  return (
    <div className="registerDesign">
      <label className="labelRegister">Name</label>
      <CustomInput
        design={`inputDesign ${userError.usernameError !== "" ? 'inputDesignError' : ''}`}
        type={"text"}
        name={"username"}
        placeholder={"Name"}
        // value={}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      <div className='errorMsg'>{userError.usernameError}</div>
      <label className="labelRegister">Email</label>
      <CustomInput
        design={`inputDesign ${userError.emailError !== "" ? 'inputDesignError' : ''}`}
        type={"email"}
        name={"email"}
        placeholder={"Email"}
        // value={}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      <div className='errorMsg'>{userError.emailError}</div>
      <label className="labelRegister">Phone Number</label>
      <CustomInput
        design={`inputDesign ${userError.phone_numberError !== "" ? 'inputDesignError' : ''}`}
        type={"text"}
        name={"phone_number"}
        placeholder={"Phone Number"}
        // value={}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      <div className='errorMsg'>{userError.phone_numberError}</div>
      <label className="labelRegister">Password</label>
      <CustomInput
        design={`inputDesign ${userError.passwordError !== "" ? 'inputDesignError' : ''}`}
        type={"password"}
        name={"password"}
        placeholder={"Password"}
        // value={}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      <div className='errorMsg'>{userError.passwordError}</div>
      <div className='buttonSubmit' onClick={Submit}>Submit</div>
    </div>
  );
};
