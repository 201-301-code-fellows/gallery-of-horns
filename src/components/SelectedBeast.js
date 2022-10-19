import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

export default class SelectedBeast extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  handleClose = () => this.setState(() => ({ show: false }))
  handleShow = () => this.setState(() => ({ show: true }))
  render() {
    return (

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.data[0].title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><Card.Img variant="top" alt={this.props.data[0].title} src={this.props.data[0].image_url} /></Modal.Body>
      </Modal>
    )
  }
}
