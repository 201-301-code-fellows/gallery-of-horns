import React, { Component } from 'react'

export default class HornedBeast extends Component {
  render() {
    console.log(this.props)
    return (
      <>

        <h2>{this.props.data.title}</h2>
        <img src={this.props.data.image_url} alt={this.props.data.title} title={this.props.data.title}></img>
        <p>{this.props.data.description}</p>
      </>
    )
  }
}
