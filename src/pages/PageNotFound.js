import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNotFoundStyles = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .logo {
    display: inline-block;
    margin-bottom: 40px;
  }
  .heading {
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .back {
    display: inline-block;
    padding: 15px 30px;
    color: white;
    background-color: ${(props) => props.theme.primary};
    border-radius: 8px;
    font-weight: 500;
  }
`;

const PageNotFound = () => {
  return (
    <PageNotFoundStyles>
      <NavLink to="/" className={"logo"}>
        <img srcSet="/logo.png 2x" alt="blogging" />
      </NavLink>
      <h1 className="heading">Oops! Page not found</h1>
      <NavLink to="/" className={"back"}>
        Back to home
      </NavLink>
    </PageNotFoundStyles>
  );
};

export default PageNotFound;
