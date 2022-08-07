import "../styles/Home.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getVideos, reset } from "../app/redux/videos/videosSlice";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";
import loadingImg from "../photo/loading-icon.gif";

interface OptProps {
  text: string;
}
const Option = ({ text }: OptProps) => {
  return (
    <div className="home__option">
      <p>{text}</p>
    </div>
  );
};

const Home = () => {
  const { videos, isLoading, isSuccess } = useAppSelector(
    (state) => state.videos
  );
  const dispatch = useAppDispatch();

  // reset the state
  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
  }, [dispatch, isSuccess]);

  // get the videos
  useEffect(() => {
    dispatch(getVideos());
  }, [dispatch]);

  return (
    <div className="home">
      <Navbar />
      <main>
        <Sidebar />
        <div className="home__content">
          <div className="home__options">
            <Option text="all" />
            <Option text="mixes" />
            <Option text="gaming" />
            <Option text="music" />
            <Option text="javascript" />
            <Option text="live" />
          </div>
          <div className="home__videos">
            {isLoading ? (
              <div className="home__loading">
                <img src={loadingImg} alt="Loading.." />
              </div>
            ) : (
              <>
                {videos.map((video) => {
                  const {
                    id,
                    snippet: {
                      channelTitle,
                      title,
                      publishedAt,
                      thumbnails: {
                        medium: { url },
                      },
                    },
                    statistics: { viewCount },
                  } = video;
                  return (
                    <Video
                      key={id}
                      imgUrl={url}
                      id={id}
                      channelTitle={channelTitle}
                      title={title}
                      publishedAt={publishedAt}
                      viewCount={viewCount}
                    />
                  );
                })}
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
