import React from 'react';

import AlbumDetails from '../albums/album-details/AlbumDetails';

export default ({match}) => (
    <div>
        <h2>Album details</h2>
        <AlbumDetails albumId={match.params.id}/>
    </div>
);