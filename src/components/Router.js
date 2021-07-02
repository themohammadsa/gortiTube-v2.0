import { Home } from '../pages/Home';
import { LikedVideos } from '../pages/LikedVideos';
import { Playlist } from '../pages/Playlist';
import { WatchLater } from '../pages/WatchLater';
import { History } from '../pages/History';
import { Routes, Route } from 'react-router-dom';
import { MediaPlayer } from '../pages/MediaPlayer';
import { Search } from '../pages/Search';
import { Error } from '../pages/Error';
import { PrivateRoute } from './PrivateRoute';
import { SignUp } from '../pages/signup/SignUp';
import { Login } from '../pages/login/Login';

export const Router = () => {
  return (
    <div className="page-content">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <PrivateRoute path="/" element={<Home />} />
        <PrivateRoute path="/liked-videos" element={<LikedVideos />} />
        <PrivateRoute path="/playlist" element={<Playlist />} />
        <PrivateRoute path="/watch-later" element={<WatchLater />} />
        <PrivateRoute path="/history" element={<History />} />
        <PrivateRoute path="/watch/:id" element={<MediaPlayer />} />
        <PrivateRoute path="/search/:id" element={<Search />} />

        <Route path="*" element={<Error />} />
      </Routes>{' '}
    </div>
  );
};
