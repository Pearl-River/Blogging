import React from "react";
import styled from "styled-components";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import Header from "../components/layout/Header";

const HomePageStyles = styled.div``;

const HomePage = () => {
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <HomePageStyles>
      <Header></Header>
    </HomePageStyles>
  );
};

export default HomePage;
