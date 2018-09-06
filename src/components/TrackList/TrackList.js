import React, { Fragment } from 'react';

import Track from '../Track';
import { Consumer } from '../../context';


const TrackList = () => (
  <Consumer>
    {
      (value) => {
        const { track_list, heading } = value;

        if (track_list === undefined) {
          return (
            <div>
              Loading...
            </div>
          );
        }
        return (
          <Fragment>
            <h3>{heading}</h3>
            <div>
              {
                track_list.map(item => (
                  <Track key={item.track.track_id} track={item.track} />
                ))
              }
            </div>
          </Fragment>
        );
      }
    }
  </Consumer>
);


export default TrackList;
