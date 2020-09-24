/** @format */

import React, { useEffect, useState } from "react";
import "./Feed.css";
import Tweetbox from "./Tweetbox.js";
import Post from "./Post.js";
import db from "./Firebase";
import FlipMove from "react-flip-move";
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div className="feed">
      {/*Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/*Tweet box */}
      <Tweetbox />
      {/*Post */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
