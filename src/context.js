import React, { Component } from 'react';
import PropTypes from 'prop-types';


const Context = React.createContext();

export class Provider extends Component {
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
