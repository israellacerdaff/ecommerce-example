import styled from "styled-components";

//HERO_SEC
export const HeroSection = styled.section`
  .hero-img {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 1;
    }
    .hero-txt {
      z-index: 2;
      text-align: center;
      h1 {
        color: #702632;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: calc(3.5vw + 3.5vh + 5vmin);
        font-weight: 900;
        );
      }
      p {
        color: #fffffa;
        font-size: calc(0.8vw + 0.8vh + 5vmin);
        font-weight: 300;
        span {
          font-weight: 700;
          -webkit-text-stroke: 1px #702632;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
`;
