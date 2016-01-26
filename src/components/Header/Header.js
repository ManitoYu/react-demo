import React from 'react'

import style from './Header.scss'

class Header extends React.Component {

  construct() {

  }

  render() {
    return (
      <header className={style.header}>
        <nav>
          <a href="#/">Home</a>
          <a href="#/list">List</a>
          <a href="#/photo">Photo</a>
          <a href="#/about">About</a>
        </nav>
      </header>
    )
  }

}

export default Header
