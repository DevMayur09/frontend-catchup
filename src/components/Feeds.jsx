import axios from "axios";
import React, { useEffect } from "react";
import { Base_url } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeeds } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feeds = () => {
  const feeds = useSelector((state) => state.feeds);
  const dispatch = useDispatch();

  const fetchFeeds = async () => {
    try {
      if (feeds) return;
      const $response = await axios.get(Base_url + "/user/feeds", { withCredentials: true });
      dispatch(addFeeds($response.data));
    } catch (error) {
      console.log("Error : ", error.message);
    }
  };

  useEffect(() => {
    fetchFeeds();
  }, []);
  return (
    feeds && (
      <div>
        <UserCard user={feeds.data[0]} />
      </div>
    )
  );
};

export default Feeds;
