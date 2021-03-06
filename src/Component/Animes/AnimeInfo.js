import React, { Component, Fragment } from 'react';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
class AnimeInfo extends Component {
    state = {
        animeImg: ''
    }
    componentDidUpdate(){
        console.log(this.state);
    }
    componentDidMount() {
        this.props.getAnime(this.props.match.params.id)
            // had to set the api object img to state in order to render it after the call is finished
            .then(()=>this.setState({animeImg: this.props.anime.posterImage}));
    }

    render() {
        console.log(this.props.anime);
        const { loading } = this.props;

        if (loading) return <Spinner />;

        return (
            <div>
                <img style={{width: '17rem'}} src={this.state.animeImg.large} alt=""/>
                <ul>
                    <li>{this.props.anime.canonicalTitle}</li>
                    <li>Rating: {this.props.anime.averageRating}</li>
                    <li>{this.props.anime.synopsis}</li>
                </ul>
            </div>
        );
    }
}

export default AnimeInfo;
