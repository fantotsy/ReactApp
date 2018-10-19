import * as ALBUM_TYPES from '../types/albums';
import { ALBUMS_URL } from '../variables';

export const requestAlbumsInit = () => ({
  type: ALBUM_TYPES.REQUEST_ALBUMS_INIT,
});

export const requestAlbumsSuccess = (data) => ({
  type: ALBUM_TYPES.REQUEST_ALBUMS_SUCCESS,
  data,
});

export const requestAlbumsError = (error) => ({
  type: ALBUM_TYPES.REQUEST_ALBUMS_ERROR,
  error,
});

export const requestAlbums = () => (dispatch) => {
    dispatch(requestAlbumsInit());
    fetch(ALBUMS_URL)
        .then(response => response.json())
        .then(albums => dispatch(requestAlbumsSuccess(albums)))
        .catch(error => dispatch(requestAlbumsError(error)))
}