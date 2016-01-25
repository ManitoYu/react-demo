'use strict'

import React from 'react'
import style from './List.scss'

class List extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [
        { id: 1, name: 'yucong' },
        { id: 2, name: 'yucfanchao' },
        { id: 3, name: 'zhouxing' },
        { id: 4, name: 'leiguang' }
      ]
    }
  }

  render() {
    return(
      <ul className={style.list}>
        {
          this.state.users.map(user => {
            return <li className={style.item} key={user.id}>{user.name}</li>
          })
        }
      </ul>
    )
  }
}

export default List
