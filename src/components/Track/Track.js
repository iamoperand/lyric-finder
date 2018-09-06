import React from 'react';
import {
  Card,
} from 'antd';
import {
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';


const Track = ({ track }) => (
  <Card>
    <p>Track: {track.track_name}</p>
    <p>Album: {track.album_name}</p>
    <Link to="">View Lyrics</Link>
  </Card>
);

Track.propTypes = {
  track: PropTypes.shape({
    track_name: PropTypes.string,
    album_name: PropTypes.string,
  }).isRequired,
};


export default Track;
