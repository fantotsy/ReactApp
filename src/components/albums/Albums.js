import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../loading/Loading';

export default class Albums extends React.Component {
    componentDidMount() {
        this.props.requestAlbums();
    }

    renderAlbums = album => (
        <li key={album.id}>
            <Link to={`/albums/${album.id}`}>{album.title}</Link>
        </li>
    );

    render() {
        const { data, isLoading } = this.props;

        return (
            <Loading isLoading={isLoading}>
                <ul>{data.map(this.renderAlbums)}</ul>
            </Loading>
        )
    }
}