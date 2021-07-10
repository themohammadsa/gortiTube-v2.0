import { useLibraryContext } from '../context/LibraryContext';
import { VideoCard } from '../components/VideoCard';
import { NavBar } from '../components/NavBar';
import { useState } from 'react';
import { Footer } from '../components/Footer';
import { Toast } from '../components/Toast';
import { useToggleContext } from '../context/ToggleContext';

export const Playlist = () => {
  const { state, dispatch } = useLibraryContext();
  const [reRender, setReRender] = useState(false);
  const { setToastText, setToastShow } = useToggleContext();

  return (
    <>
      <div className="page">
        <div>
          {' '}
          <NavBar />{' '}
        </div>
        <div className="flex-column margin-auto">
          <h1 className="heading">Playlist</h1>
          <h3 className="sub-heading"> ({state.playlist.length} playlists) </h3>
          {state.playlist.length > 0 && (
            <div>
              {state.playlist.map((playlist, index) => {
                return (
                  <div key={index}>
                    <h1 className="heading" style={{ position: 'relative' }}>
                      {' '}
                      {playlist.name}{' '}
                      <span
                        className="button-delete"
                        onClick={() => {
                          dispatch({
                            type: 'DELETE_PLAYLIST',
                            nameOfPlaylist: playlist.name,
                          });
                          setReRender(!reRender);
                          setToastShow((toggle) => !toggle);
                          setToastText('Deleted the Playlist');
                        }}
                      >
                        DELETE
                      </span>{' '}
                    </h1>
                    <h3 className="sub-heading">
                      {' '}
                      {state.playlist[index].video.length} videos{' '}
                    </h3>{' '}
                    <div className="flex-row flex-wrap justify-space-evenly">
                      {playlist.video.map((video, index) => {
                        return (
                          <div key={index}>
                            <div style={{ position: 'relative' }}>
                              <VideoCard video={video} />{' '}
                              <span
                                className="button-close"
                                onClick={() => {
                                  dispatch({
                                    type: 'REMOVE_FROM_PLAYLIST',
                                    nameOfPlaylist: playlist.name,
                                    payload: video,
                                  });
                                  setReRender(!reRender);
                                  setToastShow((toggle) => !toggle);
                                  setToastText('Removed from Playlist');
                                }}
                              >
                                {' '}
                                ×{' '}
                              </span>
                            </div>
                          </div>
                        );
                      })}{' '}
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>{' '}
      <Toast />
      <Footer />{' '}
    </>
  );
};
