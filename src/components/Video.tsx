import "../styles/Video.css";
import { Link } from "react-router-dom";

interface Props {
  id?: string;
  channelTitle?: string;
  title?: string;
  publishedAt?: string;
  imgUrl?: string;
  viewCount?: string;
}

const Video = ({
  imgUrl,
  id,
  channelTitle,
  title,
  publishedAt,
  viewCount,
}: Props) => {
  return (
    <Link to={`/video/${id}`} className="video">
      <img src={imgUrl} alt={title} />
      <div className="video__info">
        <h3 className="video__title">{title}</h3>
        <p className="video__username">{channelTitle}</p>
        <p className="video__views">
          {viewCount} views - {publishedAt}
        </p>
      </div>
    </Link>
  );
};

export default Video;
