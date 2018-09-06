import React from 'react';
import {
  Input,
} from 'antd';
import axios from 'axios';

import apiRoutes from '../../config/apiRoutes';
import { Consumer } from '../../context';


const { Search: AntSearch } = Input;

const onSearchHandler = async (value, dispatch) => {
  try {
    const apiSearchResponse = await axios.get(`${apiRoutes.trackSearch}${value}`);

    dispatch({
      type: 'SEARCH_TRACKS',
      payload: apiSearchResponse.data.message.body.track_list,
    });
  } catch (e) {
    console.log(e);
  }
};

const Search = () => (
  <Consumer>
    {
      (context) => {
        const { dispatch } = context;
        return (
          <AntSearch
            placeholder="Search for a song..."
            onSearch={value => onSearchHandler(value, dispatch)}
            enterButton
          />
        );
      }
    }
  </Consumer>
);


export default Search;
