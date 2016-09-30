import React from 'react'

const SearchBar = ({ onChange }) => (
  <div><input type="text" onChange={ (e) => { onChange(e) }} /></div>
)

export default SearchBar;
