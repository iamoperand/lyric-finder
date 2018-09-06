import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import apiRoutes from './config/apiRoutes';


const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_TRACKS':
      return {
        ...state,
        track_list: action.payload,
        heading: 'Search Results',
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    track_list: [],
    heading: 'Top 10 tracks',
    dispatch: action => this.setState(state => reducer(state, action)),
  }

  async componentDidMount() {
    try {
      const response = await axios.get(apiRoutes.topTracks);
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
