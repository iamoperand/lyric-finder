import React from 'react';
import {
  Input,
} from 'antd';


const { Search: AntSearch } = Input;


const Search = () => (
  <AntSearch
    placeholder="Search for a song..."
    onSearch={value => console.log(value)}
    enterButton
  />
);


export default Search;
