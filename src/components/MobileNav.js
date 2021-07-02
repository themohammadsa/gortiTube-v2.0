import { useNavigate } from 'react-router-dom';
import { BiHistory } from 'react-icons/bi';
import { MdVideoLibrary } from 'react-icons/md';
import {
  AiOutlineClockCircle,
  AiFillClockCircle,
  AiFillHeart,
  AiOutlineHeart,
  AiFillHome,
} from 'react-icons/ai';

export const MobileNav = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mobile-nav mobile">
        <div className="flex-row justify-space-evenly">
          <AiFillHome
            className="react-icon mobile-icon"
            onClick={() => navigate('/')}
          />
          <AiFillHeart
            className="react-icon mobile-icon"
            onClick={() => navigate('/liked-videos')}
          />
          <MdVideoLibrary
            className="react-icon mobile-icon"
            onClick={() => navigate('/playlist')}
          />{' '}
          <AiFillClockCircle
            className="react-icon mobile-icon"
            onClick={() => navigate('/watch-later')}
          />
          <BiHistory
            className="react-icon mobile-icon"
            onClick={() => navigate('/history')}
          />
        </div>
      </div>
    </>
  );
};

export const FooterButtons = ({ renderedVideo }) => {
  return (
    <>
      <div
        className="flex-row justify-space-evenly"
        style={{ marginTop: '1rem' }}
      >
        {!state.likedVideos.some((video) => video.id === renderedVideo.id) ? (
          <AiOutlineHeart
            className="react-icon"
            onClick={() => {
              dispatch({
                type: 'ADD_TO_LIKED_VIDEOS',
                payload: renderedVideo,
              });
            }}
          />
        ) : (
          <AiFillHeart
            className="react-icon"
            onClick={() => {
              dispatch({
                type: 'REMOVE_FROM_LIKED_VIDEOS',
                payload: renderedVideo,
              });
            }}
          />
        )}

        {!state.watchLater.some((video) => video.id === renderedVideo.id) ? (
          <AiOutlineClockCircle
            className="react-icon"
            onClick={() =>
              dispatch({
                type: 'ADD_TO_WATCH_LATER',
                payload: renderedVideo,
              })
            }
          />
        ) : (
          <AiFillClockCircle
            className="react-icon"
            onClick={() =>
              dispatch({
                type: 'REMOVE_FROM_WATCH_LATER',
                payload: renderedVideo,
              })
            }
          />
        )}
        <IoIosSend
          className="react-icon"
          onClick={() =>
            dispatch({
              type: 'ADD_TO_LIKED_VIDEOS',
              payload: renderedVideo,
            })
          }
        />
        <MdPlaylistAdd
          className="react-icon"
          onClick={() => toggleSetModalDisplay()}
        />
        {blockModalDisplay && <PlaylistModal renderedVideo={renderedVideo} />}
      </div>
    </>
  );
};
