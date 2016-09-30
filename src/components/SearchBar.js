import React from 'react'

const SearchBar = ({ onChange, search }) => (
  <div>
    <input
      placeholder="Search..."
      className="form-control"
      type="text"
      value={search}
      onChange={ (e) => { onChange(e) }}
    />
  </div>
)

export default SearchBar;
