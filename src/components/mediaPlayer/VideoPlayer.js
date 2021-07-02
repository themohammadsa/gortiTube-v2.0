import { useState } from "react";
import { watchById } from "../../utils/Functions";
import { FooterButtons } from "./FooterButtons";
import { dateToString, viewsToString } from "../../utils/Functions";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

export const VideoPlayer = ({ renderedVideo }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <>
      <div className="video-player">
        <div className="flex-column">
          <div className="iframe-player">
            <iframe
              src={watchById(renderedVideo.id)}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>{" "}
          </div>

          <div
            style={{ margin: "1.5rem 0.75rem" }}
            className="flex-column align-left "
          >
            <h2 className="ft-wt-700"> {renderedVideo.title} </h2>

            <div>
              <p className="color-grey">
                {viewsToString(renderedVideo.views)} views •{" "}
                {dateToString(renderedVideo.date)}{" "}
              </p>
            </div>

            <div className="flex-row justify-space-between">
              <div className="flex-row">
                <img src={renderedVideo.avatar} className="avatar" />
                <span className="color-bg-blue ft-wt-700">
                  {" "}
                  {renderedVideo.author}{" "}
                </span>
              </div>
              <div className="flex-row">
                {!showDescription ? (
                  <AiOutlineDown
                    onClick={() => setShowDescription(!showDescription)}
                    className="drop-down-icon"
                  />
                ) : (
                  <AiOutlineUp
                    onClick={() => setShowDescription(!showDescription)}
                    className="drop-down-icon"
                  />
                )}
              </div>{" "}
            </div>

            {showDescription && (
              <span style={{ margin: "0.5rem 0.25rem" }}>
                {renderedVideo.description}.
              </span>
            )}

            <FooterButtons renderedVideo={renderedVideo} />
          </div>
        </div>
      </div>
    </>
  );
};
