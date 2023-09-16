import React, { useState, useEffect } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { useParams, useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import { client } from "../client";
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";
import {
  userCreatedPinsQuery,
  userQuery,
  userSavedPinsQuery,
} from "../utils/data";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [pins, setPins] = useState(null);
  const [text, setText] = useState("Created");
  const [activeBtn, setActiveBtn] = useState("created");
  const navigate = useNavigate();
  const { userId } = useParams();

  if (!user)
    return <Spinner message="loading profile/user doesn't exists..." />;

  useEffect(() => {
    console.log("useeffect inside userprofile");
    const fetchUser = async () => {
      try {
        const query = userQuery(userId);
        const data = await client.fetch(query);
        setUser(data[0]);
        console.log(data[0]);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [userId]);

  return <div>UserProfile</div>;
};

export default UserProfile;
