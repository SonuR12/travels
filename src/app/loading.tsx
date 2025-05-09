"use client";

import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* Center the loader on the screen */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8); /* Optional background overlay */

  .loader {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  .bar {
    display: inline-block;
    width: 5px;
    height: 20px;
    background: linear-gradient(45deg, #ff6b6b, #feca57); /* Gradient effect */
    border-radius: 10px;
    animation: scale-up4 1s ease-in-out infinite;
  }

  .bar:nth-child(2) {
    height: 30px;
    animation-delay: 0.1s;
  }

  .bar:nth-child(3) {
    height: 40px;
    animation-delay: 0.2s;
  }

  .bar:nth-child(4) {
    height: 30px;
    animation-delay: 0.3s;
  }

  .bar:nth-child(5) {
    height: 20px;
    animation-delay: 0.4s;
  }

  @keyframes scale-up4 {
    0%,
    100% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(1.5);
    }
  }
`;

export default Loader;
