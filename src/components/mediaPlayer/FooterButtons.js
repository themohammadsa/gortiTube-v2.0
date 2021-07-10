import { useLibraryContext } from '../../context/LibraryContext';
import { useToggleContext } from '../../context/ToggleContext';
import { IoIosSend } from 'react-icons/io';
import { MdPlaylistAdd } from 'react-icons/md';
import {
  AiOutlineClockCircle,
  AiFillClockCircle,
  AiFillHeart,
  AiOutlineHeart,
} from 'react-icons/ai';
import { PlaylistModal } from './PlaylistModal';

export const FooterButtons = ({ renderedVideo }) => {
  const { state, dispatch } = useLibraryContext();
  const {
    setDisplayPlaylistFn,
    displayPlaylist,
    currentVideo,
    setCurrentVideo,
  } = useToggleContext();

  return (
    <>
      <div
        className="flex-row justify-space-evenly footer-buttons"
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
        <IoIosSend className="react-icon" />
        <MdPlaylistAdd
          className="react-icon"
          onClick={() => {
            setDisplayPlaylistFn();
            setCurrentVideo(renderedVideo);
          }}
        />
      </div>
      {displayPlaylist && <PlaylistModal renderedVideo={currentVideo} />}
    </>
  );
};
