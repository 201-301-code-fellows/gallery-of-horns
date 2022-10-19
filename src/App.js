import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import styles from './App.module.css'
import data from './data.json'
import SelectedBeast from './components/SelectedBeast'

export default class App extends Component {



  render() {
    return (
      <>
        <Header />
        <SelectedBeast data={data}/>
        <Main className={styles.main} data={data} />

        <Footer className={styles['page-footer']} />
      </>
    )
  }
}

