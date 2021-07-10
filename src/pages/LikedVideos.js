import { useLibraryContext } from '../context/LibraryContext';
import { VideoCard } from '../components/VideoCard';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { Toast } from '../components/Toast';
import { useToggleContext } from '../context/ToggleContext';

export const LikedVideos = () => {
  const { state, dispatch } = useLibraryContext();
  const { setToastText, setToastShow } = useToggleContext();

  return (
    <>
      <div className="page">
        <div>
          {' '}
          <NavBar />{' '}
        </div>
        <div className="flex-column margin-auto">
          <h1 className="heading">Liked Videos</h1>
          <h3 className="sub-heading"> ({state.likedVideos.length} videos) </h3>
          {state.likedVideos.length > 0 && (
            <div className="flex-row flex-wrap justify-space-evenly  ">
              {state.likedVideos.map((video, index) => {
                return (
                  <div key={index}>
                    <div style={{ position: 'relative' }}>
                      {' '}
                      <VideoCard video={video} />{' '}
                      <span
                        className="button-close"
                        onClick={() => {
                          dispatch({
                            type: 'REMOVE_FROM_LIKED_VIDEOS',
                            payload: video,
                          });
                          setToastShow((toggle) => !toggle);
                          setToastText('Removed from Liked Videos');
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
          )}{' '}
        </div>
      </div>{' '}
      <Toast />
      <Footer />{' '}
    </>
  );
};
