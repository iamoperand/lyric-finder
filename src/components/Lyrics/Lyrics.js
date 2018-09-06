import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

import apiRoutes from '../../config/apiRoutes';


class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {},
  }

  componentDidMount = async () => {
    const { match: { params: { id } } } = this.props;

    try {
      const lyricsFromAPI = await axios.get(`${apiRoutes.lyricsByID}${id}`);
      const { lyrics } = lyricsFromAPI.data.message.body;

      this.setState({
        lyrics,
      });

      const trackFromAPI = await axios.get(`${apiRoutes.trackByID}${id}`);
      const { track } = trackFromAPI.data.message.body;

      this.setState({
        track,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { track, lyrics } = this.state;
    return (
      <Fragment>
        <Link to="/">
          Go Home
        </Link>
        <Card title={track.artist_name} bordered={false}>
          <p>{lyrics.lyrics_body}</p>
        </Card>
      </Fragment>
    );
  }
}


export default Lyrics;
