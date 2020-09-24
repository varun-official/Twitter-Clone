/** @format */

import { Button, Avatar } from "@material-ui/core";

import React, { useState } from "react";
import db from "./Firebase";
import "./Tweetbox.css";
function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Vivek",
      userName: "vivak_shashi",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://avatars.dicebear.com/v2/male/3ec30f5a1a6c71560e4e2fcc4a7040ee.svg",
    });
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://gravatar.com/avatar/3ec30f5a1a6c71560e4e2fcc4a7040ee?s=200&d=robohash&r=x"></Avatar>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="what's happening?"
            type="text"
          ></input>
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        ></input>
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox_tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default Tweetbox;
