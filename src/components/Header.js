import React from 'react'
import FilterLink from '../containers/FilterLink'

const Header = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ONLINE">
      Online
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_OFFLINE">
      Offline
    </FilterLink>
  </p>
)

export default Header
