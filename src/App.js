import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import List from './components/List/List'
import Header from './components/Header/Header'

import style from './App.scss'

class App extends React.Component {

  construct() {

  }

  render() {
    return (
      <div className={style.container}>
        {this.props.children}
      </div>
    )
  }

}

ReactDom.render(
  <div>
    <Header />
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="list" component={List}/>
       <Route path="*" component={App}/>
      </Route>
    </Router>
  </div>
, document.querySelector('#container'))
