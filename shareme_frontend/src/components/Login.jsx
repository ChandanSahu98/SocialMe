import React from "react";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import { GoogleLogin } from "@react-oauth/google";
import { createOrGetUser } from "../utils";
import { client } from "../client";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const responseGoogle = async (response) => {
    const userdata = await createOrGetUser(response);

    localStorage.setItem("user", JSON.stringify(userdata));

    const { name, picture, email, sub } = userdata;

    const doc = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    };

    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <div className="flex justify-start items-center h-screen flex-col bg-gray-400">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute flex flex-col justify-center items-center top-0 left-0 bottom-0 right-0 bg-blackOverlay ">
        <div className="p-5">
          <img src={logo} width="130px" alt="logo" />
        </div>
        <div className="shadow-2xl">
          <GoogleLogin onSuccess={responseGoogle} onError={responseGoogle} />
        </div>
      </div>
    </div>
  );
};

export default Login;
