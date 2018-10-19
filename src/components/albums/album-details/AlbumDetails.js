import React from 'react';

const getAlbumDetailsURL = (id) => `https://jsonplaceholder.typicode.com/photos?albumId=${id}`

export default class AlbumDetails extends React.Component {
    state = {
        photos: [],
        isLoading: true
    };

    componentDidMount() {
        fetch(getAlbumDetailsURL(this.props.albumId))
            .then(response => response.json())
            .then(photos => this.setState({
                photos,
                isLoading: false
            }))
    }

    renderPhoto = (photo) => (
        <li key={photo.id}>
            <p>{photo.title}</p>
            <img src={photo.thumbnailUrl} alt="photo alt"/>
        </li>
    )

    render() {
        return (
            <React.Fragment>
                <div>Details from album #{this.props.albumId}</div>
                <ul>
                    {this.state.photos.map(this.renderPhoto)}
                </ul>
            </React.Fragment>
        )
    }
}