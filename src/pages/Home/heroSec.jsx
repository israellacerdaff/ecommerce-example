import React from "react";
import {HeroSection} from "./home.styled";
import heroImg from "../../assets/hero.jpg";
import CustomButton from "../../components/CustomButton";
import {useNavigate} from "react-router-dom";

const HeroSec = () => {
  const navigate = useNavigate();
  return (
    <HeroSection>
      <div
        className="hero-img"
        style={{
          background: `url("${heroImg}") no-repeat center center`,
          backgroundSize: "cover",
          width: "100%",
          minHeight: "600px",
        }}
      >
        <div className="hero-txt mt-5">
          <h1>Visie Commerce</h1>
          <p>
            com <span>70%</span> off
            <span> DURANTE TODO O CARNAVAL</span>
          </p>
          <CustomButton
            type="outline-btn"
            handleClick={() => navigate("/shop")}
          >
            COMPRAR AGORA
          </CustomButton>
        </div>
      </div>
    </HeroSection>
  );
};

export default HeroSec;
