import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";
const ErrorPage = () => {
  return <Wrapper>
    <div className="container">
      <h2>404</h2>
      <h2>yo are lost</h2>
      <p>page is not exit</p>
      <NavLink>
      </NavLink>
    </div>

  </Wrapper>
};
const Wrapper = styled.section`
.container {
  padding: 9rem 0;
  text-align:center;
  h2 {
    font-size: 10rem;
  }
  p {
    margin:2rem 0;
  }
}`
export default ErrorPage;
