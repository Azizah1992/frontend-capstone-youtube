import "../styles/Profile.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import emptySVG from "../photo/empty-profile.svg";

const localUser = JSON.parse(localStorage.getItem("user") || "null");
const username = localUser ? localUser.email.split("@")[0] : null;

interface TapProps {
  title: string;
}

const Tap = ({ title }: TapProps) => {
  return (
    <div className="profile__tap">
      <p>{title}</p>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="profile">
      <Navbar />
      <main>
        <Sidebar />
        <div className="profile__content">
          <div className="profile__contentTop">
            <div className="profile__info">
              <div className="profile__avatar">{username[0]}</div>
              <div className="profile__username">{username}</div>
              <div className="profile__btns">
                <button>Custom channel</button>
                <button>Manage videos</button>
              </div>
            </div>
            <div className="profile__taps">
              <Tap title="home" />
              <Tap title="videos" />
              <Tap title="playlists" />
              <Tap title="channels" />
              <Tap title="about" />
            </div>
          </div>
          <div className="profile__contentBot">
            <div className="profile__empty">
              <img src={emptySVG} alt="empty-svg" />
              <h2>Upload a video to get started</h2>
              <p>
                Start sharing your story and connecting with viewers. Videos you
                upload will show up here.
              </p>
              <button>upload video</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
