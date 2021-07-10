import { getVideo } from '../services/getVideo';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLibraryContext } from '../context/LibraryContext';
import { VideoPlayer } from '../components/mediaPlayer/VideoPlayer';
import { VideoCardHorizontal } from '../components/mediaPlayer/VideoCardHorizontal';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { Toast } from '../components/Toast';
import { Loader } from '../components/loader/Loader';

export const MediaPlayer = () => {
  const [renderedVideo, setRenderedVideo] = useState([]);

  const { database, dispatch, loader, setLoader } = useLibraryContext();

  const { id } = useParams();

  useEffect(async () => {
    let {
      data: { video },
    } = await getVideo(id);

    setRenderedVideo(video[0]);
    setLoader(true);
    dispatch({
      type: 'ADD_TO_HISTORY',
      payload: video[0],
    });
  }, [id]);

  return (
    <>
      <div
        className="page justify-space-between"
        style={{ paddingBottom: '15rem' }}
      >
        <div>
          {' '}
          <NavBar />{' '}
        </div>
        {!loader ? (
          <div className="loader">
            <Loader />{' '}
          </div>
        ) : (
          <div className="flex-column">
            <div>
              <VideoPlayer renderedVideo={renderedVideo} />
            </div>

            <div className="flex-column flex-wrap ">
              {database.map((video, index) => {
                return (
                  <div key={index}>
                    {video.id !== renderedVideo.id && (
                      <VideoCardHorizontal video={video} />
                    )}
                  </div>
                );
              })}{' '}
            </div>
          </div>
        )}{' '}
      </div>{' '}
      <Toast />
      <Footer />
    </>
  );
};
