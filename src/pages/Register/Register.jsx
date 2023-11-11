import React, { useState, useEffect } from "react";
import "./Register.css";
import { CustomInput } from "../../common/CustomInput/CustomInput";
import { registerUser } from "../../services/apiCalls";
import { useNavigate } from 'react-router-dom';

export const Register = () => {

  const navigate = useNavigate();

  const [credenciales, setCredenciales] = useState({
    username: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const functionHandler = (e) => {
    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

//   useEffect(()=>{
//     console.log(credenciales);
//   },[credenciales]);

  const registerMe = () => {

    registerUser(credenciales)
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
        type={"string"}
        name={"username"}
        placeholder={""}
        // value={}
        functionProp={functionHandler}
        // onBlur={}
      />
      <CustomInput
        design={"inputDesign"}
        type={"email"}
        name={"email"}
        placeholder={""}
        // value={}
        functionProp={functionHandler}
        // onBlur={}
      />
      <CustomInput
        design={"inputDesign"}
        type={"phone"}
        name={"phone_number"}
        placeholder={""}
        // value={}
        functionProp={functionHandler}
        // onBlur={}
      />
      <CustomInput
        design={"inputDesign"}
        type={"password"}
        name={"password"}
        placeholder={""}
        // value={}
        functionProp={functionHandler}
        // onBlur={}
      />
      <div className='buttonSubmit' onClick={registerMe}>Submit</div>
    </div>
  );
};
