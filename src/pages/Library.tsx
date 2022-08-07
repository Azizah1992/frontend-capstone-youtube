import "../styles/Library.css";
import { MdHistory, MdAccessTime } from "react-icons/md";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";
import vidPic1 from "../photo/library-1.jpg";
import vidPic2 from "../photo/library-2.jpg";
import vidPic3 from "../photo/library-3.jpg";
import vidPic4 from "../photo/library-4.jpg";
import vidPic5 from "../photo/library-5.jpg";
import vidPic6 from "../photo/library-6.png";
import vidPic7 from "../photo/library-7.webp";
import vidPic8 from "../photo/library-8.jpg";
import vidPic9 from "../photo/library-9.webp";
import vidPic10 from "../photo/redux.png";
import vidPic11 from "../photo/React.jpg";
import vidPic12 from "../photo/jsCourse.jpg";

const localUser = JSON.parse(localStorage.getItem("user") || "null");
const username = localUser ? localUser.email.split("@")[0] : "no user";

const Library = () => {
  return (
    <div className="library">
      <Navbar />
      <main>
        <Sidebar />
        <div className="library__content">
          <div className="library__main">
            <div className="library__section">
              <div className="library__title">
                <MdHistory />
                History
              </div>
              <div className="library__vids">
                <Video
                  imgUrl={vidPic1}
                  channelTitle={"Academy"}
                  title={"Learn react.js | full course"}
                  publishedAt={"3 days ago"}
                  viewCount={"20k"}
                />
                <Video
                  imgUrl={vidPic2}
                  channelTitle={"Academy"}
                  title={"Learn react.js | full course"}
                  publishedAt={"3 days ago"}
                  viewCount={"20k"}
                />
                <Video
                  imgUrl={vidPic3}
                  channelTitle={"Academy"}
                  title={"Learn react.js | full course"}
                  publishedAt={"3 days ago"}
                  viewCount={"20k"}
                />
                <Video
                  imgUrl={vidPic4}
                  channelTitle={"Academy"}
                  title={"Learn react.js | full course"}
                  publishedAt={"3 days ago"}
                  viewCount={"20k"}
                />
                <Video
                  imgUrl={vidPic5}
                  channelTitle={"Academy"}
                  title={"Learn react.js | full course"}
                  publishedAt={"3 days ago"}
                  viewCount={"20k"}
                />
                <Video
                  imgUrl={vidPic6}
                  channelTitle={"Academy"}
                  title={"Learn react.js | full course"}
                  publishedAt={"3 days ago"}
                  viewCount={"20k"}
                />
                <Video
                  imgUrl={vidPic7}
                  channelTitle={"Academy"}
                  title={"Learn react.js | full course"}
                  publishedAt={"3 days ago"}
                  viewCount={"20k"}
                />
                <Video
                  imgUrl={vidPic8}
                  channelTitle={"Academy"}
                  title={"Learn react.js | full course"}
                  publishedAt={"3 days ago"}
                  viewCount={"20k"}
                />
              </div>
            </div>
            <span className="library__line" />
            <div className="library__section">
              <div className="library__title">
                <MdAccessTime />
                Watch later
              </div>
              <div className="library__vids">
                <Video
                  imgUrl={vidPic9}
                  channelTitle={"Academy"}
                  title={"Learn react.js | full course"}
                  publishedAt={"3 days ago"}
                  viewCount={"20k"}
                />
                <Video
                  imgUrl={vidPic10}
                  channelTitle={"Academy"}
                  title={"Learn react.js | full course"}
                  publishedAt={"3 days ago"}
                  viewCount={"20k"}
                />
                <Video
                  imgUrl={vidPic11}
                  channelTitle={"Academy"}
                  title={"Learn react.js | full course"}
                  publishedAt={"3 days ago"}
                  viewCount={"20k"}
                />
                <Video
                  imgUrl={vidPic12}
                  channelTitle={"Academy"}
                  title={"Learn react.js | full course"}
                  publishedAt={"3 days ago"}
                  viewCount={"20k"}
                />
              </div>
            </div>
          </div>

          {/* right */}
          <div className="library__user">
            <div className="library__avatar">{username[0]}</div>
            <div className="library__username">{username}</div>
            <div className="library__info">
              <span className="library__line" />
              <p>
                Subscriptions <span>55</span>
              </p>
              <span className="library__line" />
              <p>
                Uploads <span>2</span>
              </p>
              <span className="library__line" />
              <p>
                Likes <span>110</span>
              </p>
              <span className="library__line" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Library;
