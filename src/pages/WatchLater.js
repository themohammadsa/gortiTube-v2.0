import { useLibraryContext } from "../context/LibraryContext";
import { VideoCard } from "../components/VideoCard";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { useToggleContext } from "../context/ToggleContext";
import { Toast } from "../components/Toast";

export const WatchLater = () => {
  const { state, dispatch } = useLibraryContext();
  const { setToastText, setToastShow } = useToggleContext();

  return (
    <>
      <div className="page">
        <div>
          {" "}
          <NavBar />{" "}
        </div>{" "}
        <div className="flex-column margin-auto">
          {" "}
          <h1 className="heading">Watch Later</h1>
          <h3 className="sub-heading"> ({state.watchLater.length} videos) </h3>
          {state.watchLater.length > 0 && (
            <div className="flex-row flex-wrap justify-space-evenly  ">
              {state.watchLater.map((video, index) => {
                return (
                  <div key={index}>
                    <div style={{ position: "relative" }}>
                      <VideoCard video={video} />
                      <span
                        className="button-close"
                        onClick={() => {
                          dispatch({
                            type: "REMOVE_FROM_WATCH_LATER",
                            payload: video
                          });
                          setToastShow((toggle) => !toggle);
                          setToastText("Removed from Watch Later");
                        }}
                      >
                        {" "}
                        ×{" "}
                      </span>{" "}
                    </div>
                  </div>
                );
              })}{" "}
            </div>
          )}{" "}
        </div>
      </div>{" "}
      <Toast />
      <Footer />{" "}
    </>
  );
};
