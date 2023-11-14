import React, { useState, useEffect } from "react";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import { ArtistsCards } from "../../common/ArtistsCard/ArtistsCard";
import { StaticNavbar } from "../../common/StaticNavbar/StaticNavbar";
import { Banner } from "../../common/BannerHome/BannerHome";
import { AboutUs } from "../../common/AboutUs/AboutUs";

export const Home = () => {

  return (
    <div>
    <div><StaticNavbar /></div>
    <div><Banner /></div>
    <div><AboutUs /></div>
       {/* <div className="home-text">Explora un mundo de creatividad y autenticidad en nuestro estudio de tatuajes. Donde la visión se convierte en arte, cada tatuaje cuenta una historia única. Expertos artistas, ambiente acogedor. ¡Haz tu marca en la piel con nosotros!</div> */}
    </div>
  );
};
