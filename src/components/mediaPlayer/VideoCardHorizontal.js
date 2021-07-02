import { dateToString, viewsToString } from "../../utils/Functions";
import { useNavigate } from "react-router-dom";
import { FooterButtons } from "./FooterButtons";

export const VideoCardHorizontal = ({ video }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="video-card-horizontal flex-row align-left">
        <div>
          <img
            src={video.thumbnail}
            className="thumbnail pointer"
            onClick={() => navigate(`/watch/${video.id}`)}
          />
        </div>

        <div className="flex-column justify-space-around video-card-content">
          <div
            className="flex-column pointer"
            onClick={() => navigate(`/watch/${video.id}`)}
          >
            <h2> {video.title} </h2>

            <span style={{ margin: "0.4rem 0rem" }} className="color-grey">
              {" "}
              {video.author}{" "}
            </span>
            <span className="color-grey">
              {viewsToString(video.views)} views • {dateToString(video.date)}{" "}
            </span>
          </div>
          <div className="video-card-horizontal-size">
            <FooterButtons renderedVideo={video} />{" "}
          </div>
        </div>
      </div>
    </>
  );
};
