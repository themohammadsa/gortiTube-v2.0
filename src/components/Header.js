import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import logotext from '../icons/logotext.png';
import logo from '../icons/logo.png';
import { SearchBar } from './SearchBar';
import { BiLogInCircle } from 'react-icons/bi';
import { useAuthContext } from '../context/AuthContext';
import { setupTokenHeaderForAxios } from '../services/setupTokenHeaderForAxios';

export const Header = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState(false);

  const { setToken, token } = useAuthContext();

  const logOutHandler = () => {
    localStorage.removeItem('loginStatus');
    setToken(null);
    setupTokenHeaderForAxios(null);
    navigate('/login');
  };

  return (
    <header className="header-bar">
      <div className="flex-row justify-space-between header-contents">
        <div className="flex-row">
          <img
            onClick={() => navigate('/')}
            src={logo}
            className="logo pointer"
          ></img>
          <img
            onClick={() => navigate('/')}
            src={logotext}
            className="logotext"
          ></img>
        </div>{' '}
        <div className="desktop">
          <SearchBar />
        </div>
        <div className="flex-row">
          <FaSearch
            className="react-icon header-icon mobile"
            onClick={() => setSearch(!search)}
          />
          {token && (
            <div
              onClick={logOutHandler}
              className="flex-row align-center pointer user "
            >
              <div className="user-icon">
                <BiLogInCircle />
              </div>
              <span className="desktop icon-text">LOG OUT </span>
            </div>
          )}
        </div>
      </div>
      <div className="mobile">{search && <SearchBar />} </div>
    </header>
  );
};
