'use strict'

import React from 'react'
import style from './List.scss'
import moment from 'moment'
import 'babel-polyfill'

class List extends React.Component {
  constructor() {
    super()
    this.state = { users: [] }

    let xhr = new XMLHttpRequest()
    xhr.open('GET', '/api/lists')
    xhr.onload = (res) => {
      this.setState({ users: JSON.parse(res.target.response).data })
    }
    xhr.send()
  }

  render() {
    return(
      <ul className={style.list}>
        {
          this.state.users.map(user => {
            return (
              <li className={style.item} key={user.id}>
                <img className={style.avatar} src={user.url} />
                <div className={style.info}>
                  <p className={style['user-info']}>
                    <a className={style.user}>{user.name}</a>
                    <span className={style.time}>{new moment().format('YYYY-MM-DD HH:mm:ss')}</span>
                  </p>
                  <p className={style.words}>
                    Onionkings is so handsome, awesome.
                  </p>
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default List
