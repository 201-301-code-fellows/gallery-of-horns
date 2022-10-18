import React, { Component } from 'react'
import styles from './HornedBeasts.module.css'
export default class HornedBeast extends Component {

  render() {
    
    return (
      <>

        <h2>{this.props.data.title}</h2>
        <figure>
          <img className={styles.image} src={this.props.data.image_url} alt={this.props.data.title} title={this.props.data.title}></img>
          <p>{this.props.data.description}</p>
        </figure>
      </>
    )
  }
}
