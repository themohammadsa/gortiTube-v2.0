import { useNavigate } from "react-router-dom";
import { BiHistory } from "react-icons/bi";
import { MdVideoLibrary } from "react-icons/md";
import { AiFillClockCircle, AiFillHeart, AiFillHome } from "react-icons/ai";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="nav-bar desktop">
        <div className="nav-element pointer" onClick={() => navigate("/")}>
          <AiFillHome className="react-icon mobile-icon" />

          <h2>HOME</h2>
        </div>
        <div
          className="nav-element pointer"
          onClick={() => navigate("/playlist")}
        >
          <MdVideoLibrary className="react-icon mobile-icon" />

          <h2>PLAYLIST</h2>
        </div>
        <div
          className="nav-element pointer"
          onClick={() => navigate("/liked-videos")}
        >
          <AiFillHeart className="react-icon mobile-icon" />

          <h2>LIKED VIDEOS</h2>
        </div>
        <div
          className="nav-element pointer"
          onClick={() => navigate("/watch-later")}
        >
          <AiFillClockCircle className="react-icon mobile-icon" />

          <h2>WATCH LATER</h2>
        </div>
        <div
          className="nav-element pointer"
          onClick={() => navigate("/history")}
        >
          <BiHistory className="react-icon mobile-icon" />

          <h2>HISTORY</h2>
        </div>
      </div>
    </>
  );
};
