import React, { useEffect, useState } from "react";
import { client } from "../client";
import { useParams } from "react-router-dom";
import { Spinner, MasonryLayout } from "./index";
import { feedQuery, searchQuery } from "../utils/data";

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(true);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(true);
      });
    }
  }, [categoryId]);

  if (!loading)
    return <Spinner message="We are adding new ideas to your feed!" />;

  if (!pins?.length) return <h2>No Pins Available...</h2>;

  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
