import { postUserResponse } from '../services/postUserResponse.js';

export const ReducerFunction = (state, { type, payload, nameOfPlaylist }) => {
  switch (type) {
    case 'ADD_TO_LIKED_VIDEOS':
      postUserResponse(payload.id, 'likedVideos', 'add');
      if (state.likedVideos.some((video) => video.id === payload.id))
        return state;
      else
        return {
          ...state,
          likedVideos: [...state.likedVideos, payload],
        };

    case 'REMOVE_FROM_LIKED_VIDEOS':
      postUserResponse(payload.id, 'likedVideos', 'remove');
      return {
        ...state,
        likedVideos: [
          ...state.likedVideos.filter((video) => video.id !== payload.id),
        ],
      };

    case 'ADD_TO_WATCH_LATER':
      postUserResponse(payload.id, 'watchLater', 'add');
      if (state.watchLater.some((video) => video.id === payload.id)) {
        return state;
      } else {
        return {
          ...state,
          watchLater: [...state.watchLater, payload],
        };
      }

    case 'REMOVE_FROM_WATCH_LATER':
      postUserResponse(payload.id, 'watchLater', 'remove');
      return {
        ...state,
        watchLater: [
          ...state.watchLater.filter((video) => video.id !== payload.id),
        ],
      };

    case 'ADD_TO_HISTORY':
      postUserResponse(payload.id, 'history', 'add');
      if (state.history.some((video) => video.id === payload.id)) return state;
      else
        return {
          ...state,
          history: [...state.history, payload],
        };

    case 'REMOVE_FROM_HISTORY':
      postUserResponse(payload.id, 'history', 'remove');
      return {
        ...state,
        history: [...state.history.filter((video) => video.id !== payload.id)],
      };

    case 'CLEAR_HISTORY':
      postUserResponse(payload.id, 'history', 'clear');
      return {
        ...state,
        history: [],
      };

    case 'CREATE_PLAYLIST':
      postUserResponse(payload.id, 'playlist', 'create', nameOfPlaylist);
      return {
        ...state,
        playlist: [
          ...state.playlist,
          {
            name: nameOfPlaylist,
            video: [],
          },
        ],
      };

    case 'ADD_TO_PLAYLIST':
      postUserResponse(payload.id, 'playlist', 'add', nameOfPlaylist);
      const index = state.playlist.findIndex(
        (obj) => obj.name === nameOfPlaylist
      );
      if (state.playlist[index].video.some((video) => video.id === payload.id))
        return state;
      else {
        state.playlist[index].video = state.playlist[index].video.concat(
          payload
        );
        return state;
      }

    case 'REMOVE_FROM_PLAYLIST':
      postUserResponse(payload.id, 'playlist', 'remove', nameOfPlaylist);
      const indexOfPlaylist = state.playlist.findIndex(
        (obj) => obj.name === nameOfPlaylist
      );

      state.playlist[indexOfPlaylist].video = state.playlist[
        indexOfPlaylist
      ].video.filter((video) => video.id !== payload.id);
      return state;

    case 'DELETE_PLAYLIST':
      postUserResponse('', 'playlist', 'delete', nameOfPlaylist);
      state.playlist = state.playlist.filter(
        (playlist) => playlist.name !== nameOfPlaylist
      );
      return state;

    default:
      return state;
  }
};
