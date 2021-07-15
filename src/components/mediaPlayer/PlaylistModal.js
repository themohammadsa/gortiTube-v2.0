import { useState } from 'react';
import { useLibraryContext } from '../../context/LibraryContext';
import { useToggleContext } from '../../context/ToggleContext';

export const PlaylistModal = ({ renderedVideo }) => {
  const [nameOfPlaylist, setNameOfPlaylist] = useState('');
  const { state, dispatch } = useLibraryContext();
  const [createPlaylist, setCreatePlaylist] = useState(false);
  const {
    setDisplayPlaylistFn,
    setToastText,
    setToastShow,
  } = useToggleContext();

  const addToPlaylistFn = () => {
    return (
      <>
        <div className="flex-column align-center ">
          <input
            className="input-box"
            placeholder="Name"
            onChange={(event) => setNameOfPlaylist(event.target.value)}
          />
          <button
            className="button button-primary"
            style={{ width: '5rem' }}
            onClick={() => {
              dispatch({
                type: 'CREATE_PLAYLIST',
                nameOfPlaylist: nameOfPlaylist,
                payload: renderedVideo,
              });
            }}
          >
            <span>Create </span>
          </button>
        </div>
        )
      </>
    );
  };

  const createNewPlaylistFn = () => {
    return (
      <>
        <div className="flex-column align-center">
          <button
            style={{ width: '11rem', margin: '1rem' }}
            className="button button-primary"
            onClick={() => setCreatePlaylist((toggle) => !toggle)}
          >
            Create New Playlist{' '}
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      <div
        className="modal-block"
        onClick={() =>
          event.target.classList.contains('modal-block') &&
          setDisplayPlaylistFn()
        }
      >
        <div className="modal-content">
          <div className="flex-row justify-space-between heading ">
            <h2>Save to Playlist </h2>
            <span
              className="button-dismiss"
              onClick={() => setDisplayPlaylistFn()}
            >
              ×
            </span>
          </div>
          <div style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>
            {state.playlist.map((video, index) => {
              return (
                <div key={index} className="flex-row playlist-map ">
                  <button
                    style={{ padding: '0.3rem' }}
                    className="button button-secondary"
                    onClick={() => {
                      dispatch({
                        type: 'ADD_TO_PLAYLIST',
                        nameOfPlaylist: video.name,
                        payload: renderedVideo,
                      });
                      setDisplayPlaylistFn();
                      setToastShow((toggle) => !toggle);
                      setToastText('Added to Playlist');
                    }}
                  >
                    ADD
                  </button>
                  <h3> {video.name} </h3>
                </div>
              );
            })}
          </div>

          {createPlaylist && addToPlaylistFn()}

          {!createPlaylist && createNewPlaylistFn()}
        </div>
      </div>
    </>
  );
};
