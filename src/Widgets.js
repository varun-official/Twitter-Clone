/** @format */

import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
import "./Widgets.css";
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets__widgetContiainer">
        <h2>What's happaning</h2>
        <TwitterTweetEmbed tweetId={"933354946111705097"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ANI"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://facebook.com/varun_vadda"}
          options={{ text: "#reactjs is awesome", via: "varun_vadda" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
