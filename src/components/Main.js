import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
export default class Main extends Component {
  render() {
    return (


      this.props.data.map((hornedBeastData) => {
        return <HornedBeast key={hornedBeastData.id} data={hornedBeastData} />
      })

    )
  }
}
