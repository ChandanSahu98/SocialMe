import React, { useState } from "react";
import { client } from "../client";
import { useParams } from "react-router-dom";
import { Spinner, MasonryLayout } from "./index";

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const params = useParams();

  if (loading)
    return <Spinner message="We are adding new ideas to your feed!" />;

  return <div>Feed</div>;
};

export default Feed;
