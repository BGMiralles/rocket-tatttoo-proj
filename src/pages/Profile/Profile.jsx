import React, { useState, useEffect } from "react";
import "./Profile.css";

import { CustomInput } from "../../common/CustomInput/CustomInput";
import { validator } from "../../services/useful";
import { useNavigate } from 'react-router-dom';

//Importo elementos para conexión a RDX en modo lectura
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { updateProfile } from "../../services/apiCalls";

export const Profile = () => {

  //Instancio navigate para poder navegar
  const navigate = useNavigate();

  //Instancio a RDX en modo lectura
  const datosRdxUser = useSelector(userData);

  //Variables de estado con hook useState en las que voy a guardar los valores de los input
  const [profile, setProfile] = useState({
    username: datosRdxUser.data.username,
    email: datosRdxUser.data.email,
  });

  const [profileError, setProfileError] = useState({
    usernameError: '',
    emailError: '',
  });

  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    //RDX se puede seguir como un hook de useState... por lo tanto seguimos

    if(!datosRdxUser.credentials){
      navigate("/")
    }
  }, [datosRdxUser]);

  const errorCheck = (e) => {

    let error = "";

    error = validator(e.target.name, e.target.value);

    setProfileError((prevState) => ({
        ...prevState,
        [e.target.name + 'Error']: error,
    }));
  }

  const functionHandler = (e) => {
    setProfile((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const sendData = () => {
    updateProfile(profile, datosRdxUser.credentials)
      .then(
        resultado => {
            setIsEnabled(true)          
        }
        )
        .catch(error => console.log(error));
      }

  return (
    <div className="profileDesign">
      <div className="header">Name</div>
      <CustomInput
        disabled={isEnabled}
        design={`inputDesign ${
          profileError.usernameError !== "" ? "inputDesignError" : ""
        }`}
        type={"text"}
        name={"username"}
        placeholder={""}
        value={profile.username}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      <div className="header">Email</div>
      <CustomInput
        disabled={isEnabled}
        design={`inputDesign ${
          profileError.emailError !== "" ? "inputDesignError" : ""
        }`}
        type={"text"}
        name={"email"}
        placeholder={""}
        value={profile.email}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      {
        isEnabled 
        ? (<div className="editDesign" onClick={()=>setIsEnabled(!isEnabled)}>Edit</div>)

        : (<div className="sendDesign" onClick={()=>sendData()}>Send</div>)
      }
    </div>
  );
};
