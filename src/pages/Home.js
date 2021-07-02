import { useLibraryContext } from '../context/LibraryContext';
import { VideoCard } from '../components/VideoCard';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { Loader } from '../components/loader/Loader';

export const Home = () => {
  const { database, loader } = useLibraryContext();

  return (
    <>
      <div className="page">
        <div>
          <NavBar />
        </div>
        {!loader ? (
          <div className="loader">
            <Loader />{' '}
          </div>
        ) : (
          <div className="flex-row flex-wrap justify-space-evenly">
            {database.map((video, index) => {
              return (
                <div key={index}>
                  <VideoCard video={video} />
                </div>
              );
            })}{' '}
          </div>
        )}{' '}
      </div>{' '}
      <Footer />
    </>
  );
};
