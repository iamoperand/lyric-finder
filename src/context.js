import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import apiRoutes from './config/apiRoutes';


const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [],
    heading: 'Top 10 tracks',
  }

  async componentDidMount() {
    try {
      const response = await axios.get(apiRoutes.topTracks);
      console.log(response);
      const { track_list } = response.data.message.body;
      this.setState({
        track_list,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { children } = this.props;
    return (
      <Context.Provider value={this.state}>
        {children}
      </Context.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};


export const { Consumer } = Context;
