import React from 'react';
import "./landing.css";
import me from "../utils/smiling.JPG"
import logo from "../utils/PU-logo.png"
import MoreVert from '@mui/icons-material/MoreVert';

function landing() {
    return (
        <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={logo}
              alt=""
            />
            <span className="postUsername">
              Username
            </span>
            <span className="postDate">date</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">hello</span>
          {/* <img className="postImg" src={logo} alt="" /> */}
        </div>
        {/* <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
            <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div> */}
      </div>
    </div>
    );
}

export default landing;