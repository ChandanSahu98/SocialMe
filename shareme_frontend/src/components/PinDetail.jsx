import Spinner from "./Spinner";
import { v4 as uuidv4 } from "uuid";
import { client, urlFor } from "../client";
import MasonryLayout from "./MasonryLayout";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MdDownloadForOffline } from "react-icons/md";
import { pinDetailMorePinQuery, pinDetailQuery } from "../utils/data";

const PinDetail = ({ user }) => {
  const [Pins, setPins] = useState(null);
  const [pinDetail, setPinDetail] = useState(false);
  const [comments, setComments] = useState("");
  const [addingComment, setAddingComment] = useState(null);
  const { pinId } = useParams();

  const fetchPinDetails = () => {
    let query = pinDetailQuery(pinId);
    if (query) {
      client.fetch(query).then((data) => {
        setPinDetail(data[0]);

        if (data[0]) {
          query = pinDetailMorePinQuery(data[0]);

          client.fetch(query).then((res) => setPins(res));
        }
      });
    }
  };

  useEffect(() => {
    fetchPinDetails();
  }, [pinId]);

  if (!pinDetail) return <Spinner message="loading pin" />;

  return (
    <div
      className="flex xl:flex-row flex-col m-auto bg-white"
      style={{ maxWidth: "1500px", borderRadius: "32px" }}
    >
      <div className="flex justify-center items-center md:items-start flex-initial p-4">
        <img
          src={pinDetail?.image && urlFor(pinDetail.image)}
          className="rounded-t-3xl rounded-b-lg"
          alt="user-post"
        />
      </div>
      <div className="w-full p-5 flex-1 xl:min-w-620">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <a
              href={`${pinDetail?.image?.asset?.url}?dl=`}
              download
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="bg-white w-9 h-9 p-2 rounded-full flex items-center justify-center text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none"
            >
              <MdDownloadForOffline />
            </a>
          </div>
          <a
            href={pinDetail?.destination}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl py-2 px-2 shadow-sm outline-none hover:bg-[#FFFFF0]"
          >
            {pinDetail?.destination && pinDetail?.destination.length > 20
              ? pinDetail.destination.slice(0, 20) + "....."
              : null}
          </a>
        </div>
        <h1 className="text-4xl font-bold break-words mt-3">
          {pinDetail?.title}
        </h1>
        <p className="mt-3">{pinDetail?.about}</p>
        <Link
          to={`/user-profile/${pinDetail?.postedBy?._id}`}
          className="flex gap-2 mt-5 items-center bg-white rounded-lg"
        >
          <img
            className="w-8 h-8 rounded-full object-cover"
            src={pinDetail?.postedBy?.image}
            alt="user-profile"
          />
          <p className="font-semibold capitalize">
            {pinDetail?.postedBy?.userName}
          </p>
        </Link>
        <h2 className="mt-5 text-2xl">Comments</h2>
        <div className="max-h-370 overflow-y-auto">
          {pinDetail?.comments?.map((comment, i) => (
            <div
              className="flex gap-2 mt-5 items-center bg-white rounded-lg "
              key={i}
            >
              <img
                src={comment.postedBy.image}
                alt="user-profile"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
              <div className="flex flex-col">
                <p className="font-bold">{comment?.postedBy?.userName}</p>
                <p>{comment?.comment}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap mt-6 gap-3 ">
          <Link
            to={`/user-profile/${pinDetail?.postedBy?._id}`}
            className="flex gap-2 mt-5 items-center bg-white rounded-lg"
          >
            <img
              className="w-8 h-8 rounded-full object-cover"
              src={pinDetail?.postedBy?.image}
              alt="user-profile"
            />
          </Link>
          <input className="flex-1 border-gray-100 outline-none border-2 p-2 rounded-2xl focus:border-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default PinDetail;
