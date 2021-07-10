import { useLibraryContext } from '../context/LibraryContext';
import { VideoCard } from '../components/VideoCard';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { useToggleContext } from '../context/ToggleContext';
import { Toast } from '../components/Toast';

export const History = () => {
  const { state, dispatch } = useLibraryContext();
  const { setToastText, setToastShow } = useToggleContext();

  return (
    <>
      <div className="page">
        <div>
          {' '}
          <NavBar />{' '}
        </div>
        <div className="flex-column test margin-auto">
          <h1 className="heading">History</h1>
          <h3 className="sub-heading"> ({state.history.length} videos) </h3>
          {state.history.length > 0 && (
            <div className="flex-row flex-wrap justify-space-evenly  ">
              {state.history.map((video, index) => {
                return (
                  <div key={index}>
                    <div style={{ position: 'relative' }}>
                      <VideoCard video={video} />{' '}
                      <span
                        className="button-close"
                        onClick={() => {
                          dispatch({
                            type: 'REMOVE_FROM_HISTORY',
                            payload: video,
                          });
                          setToastShow((toggle) => !toggle);
                          setToastText('Removed from History');
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
