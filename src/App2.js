import React from 'react'
import ReactDOM from 'react-dom'

import style from './App.scss'

import List from './components/List/List'

import co from 'co'
import 'babel-polyfill'

let quickSort = ([x, ...arr]) => {
  if (! arr.length) return []
  return [...quickSort(arr.filter(s => s <= x)), x, ...quickSort(arr.filter(s => s > x))]
}

let time = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('finished')
    }, 1000)
  })
}

co(function* () {
  console.log(yield time())
  console.log(yield time())
  console.log(yield time())
})
.catch((err) => {
  console.log(err)
})

console.log(quickSort([3, 2, 1, 4, 7, 6]))


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
