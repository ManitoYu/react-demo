import React from 'react'
import ReactDOM from 'react-dom'

import style from './App.scss'

import List from './components/List/List'

class App extends React.Component {

  render() {
    return(
      <div>
        <h1 className={style.title}>Onionkings</h1>
        <List></List>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.querySelector('#container'))
