import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import styles from './App.module.css'
import data from './data.json'
import SelectedBeast from './components/SelectedBeast'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      show: false,
      alt: ''
    }
  }
  changeShow = (alt) => {
    this.setState({
      show: true,
      alt: alt
    })
  }

  changeClose = () => {
    this.setState({
      show: false,
    })
  }


  render() {
    return (
      <>
        <Header />
        <SelectedBeast onCloseModal={this.changeClose} showBeast={data.filter(item => item.title === this.state.alt)} show={this.state.show} data={data} />
        <Main changeShow={this.changeShow} className={styles.main} data={data} />

        <Footer className={styles['page-footer']} />
      </>
    )
  }
}

