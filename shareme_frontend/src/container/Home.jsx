import React from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, Route, Routes } from "react-router-dom";
import { SideBar, UserProfile } from "../components";

const Home = () => {
  return (
    <div>
      <SideBar />
      <UserProfile />
    </div>
  );
};

export default Home;
