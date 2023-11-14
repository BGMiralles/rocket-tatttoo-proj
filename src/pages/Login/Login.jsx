import React, { useState, useEffect } from "react";
import "./Login.css";
import { CustomInput } from "../../common/Custominput/Custominput";
import { logUser } from "../../services/apiCalls";
import { useNavigate } from 'react-router-dom';

//Importo Rdx

import { useDispatch } from "react-redux";  //useDispatch es necesario para emitir acciones
import { login } from "../userSlice";

export const Login = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [credenciales, setCredenciales] = useState({
    email: "",
    password: "",
  });

  const [msgError, setMsgError] = useState('');

  const functionHandler = (e) => {
    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const errorCheck = () => {
    console.log("ha ha ha ha");
  }

//   useEffect(()=>{
//     console.log(credenciales);
//   },[credenciales]);

  const logMe = () => {

    logUser(credenciales)
        .then(
            resultado => {
                console.log(resultado)
                //Aqui guardaría el token........en RDXXX
                dispatch(login({ credentials: resultado.data }))

                //Una vez guardado el token....nos vamos a home....
                navigate("/");
                
            }
        )
        .catch(error => {
          console.log(error)
          setMsgError(error.message);
        });

  }

  return (
    <div className="loginDesign">
      <div className="form">
        <label className="labelLogin">Email</label>
        <CustomInput
          design={"inputDesign"}
          type={"email"}
          name={"email"}
          placeholder={"Email"}
          // value={}
          functionProp={functionHandler}
          functionBlur={errorCheck}
        />
        <label className="labelLogin">Password</label>
        <CustomInput
          design={"inputDesign"}
          type={"password"}
          name={"password"}
          placeholder={"Password"}
          // value={}
          functionProp={functionHandler}
          functionBlur={errorCheck}
        />
      </div>
      <div className='buttonLogin' onClick={logMe}>Log Me!</div>
      <div>{msgError}</div>
    </div>
  );
};
