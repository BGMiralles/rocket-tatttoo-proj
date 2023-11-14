import React, { useState, useEffect } from "react";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import { ArtistsCards } from "../../common/ArtistsCard/ArtistsCard";
import { StaticNavbar } from "../../common/StaticNavbar/StaticNavbar";
import { Banner } from "../../common/BannerHome/BannerHome";
import { AboutUs } from "../../common/AboutUs/AboutUs";
import { TattooStyles } from "../../common/TattooStyles/TattooStyles";
import { Information } from "../../common/Information/Information";

export const Home = () => {

  return (
    <div>
    <div><StaticNavbar /></div>
    <div><Banner /></div>
    <div><AboutUs /></div>
    <div><TattooStyles /></div>
    <div><Information /></div>
    </div>
  );
};
