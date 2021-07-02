import {
  useContext,
  createContext,
  useReducer,
  useState,
  useEffect,
} from 'react';
import { getAllVideos } from '../services/getVideo';
import { ReducerFunction } from '../reducer/ReducerFunction';
import { getUserData } from '../services/getUserData';
import { useAuthContext } from './AuthContext';

const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const [database, setDatabase] = useState([]);
  const [loader, setLoader] = useState(false);
  const { token } = useAuthContext();

  const initialState = {
    likedVideos: [],
    playlist: [],
    watchLater: [],
    history: [],
    search: '',
  };

  const [state, dispatch] = useReducer(ReducerFunction, initialState);

  useEffect(async () => {
    if (token) {
      const { videos } = await getAllVideos('/videolibrary');
      const {
        likedVideos,
        playlist,
        history,
        watchLater,
      } = await getUserData();
      updateData(likedVideos, videos, 'likedVideos');
      updateData(history, videos, 'history');
      updateData(watchLater, videos, 'watchLater');
      updatePlaylist(playlist, videos, 'playlist');
      setLoader(true);
      setDatabase(videos);
    }
  }, [token]);

  const updateData = (categoryData, videos, categoryName) => {
    const updatedData = categoryData.map((videoId) => {
      const updatedDataVideo = videos.find((video) => video.id === videoId);
      return updatedDataVideo;
    });
    state[`${categoryName}`] = updatedData;
  };

  const updatePlaylist = (playlistData, videos) => {
    const updatedPlaylist = playlistData.map((playlist) => {
      const playlistVideosArray = playlist.video.map((videoId) => {
        const playlistVideoData = videos.find((video) => video.id === videoId);
        return playlistVideoData;
      });

      const newPlaylist = {
        name: playlist.name,
        video: [...playlistVideosArray],
      };
      return newPlaylist;
    });

    state.playlist = updatedPlaylist;
  };

  return (
    <>
      <LibraryContext.Provider
        value={{ database, state, dispatch, loader, setLoader }}
      >
        {children}
      </LibraryContext.Provider>
    </>
  );
};

export const useLibraryContext = () => {
  return useContext(LibraryContext);
};
