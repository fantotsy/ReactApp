import React from 'react';
import { connect } from 'react-redux';
import { requestAlbums } from '../../actions/album';
import Albums from './Albums';

const mapStateToProps = (state) => ({
    data: state.albums.data,
    isLoading: state.albums.isLoading,
});

const mapDispatchToProps = {
    requestAlbums
};

const addProps = connect(mapStateToProps, mapDispatchToProps);
const AlbumsContainer = addProps(Albums);

export default AlbumsContainer;