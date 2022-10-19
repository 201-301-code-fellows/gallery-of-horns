import React, { Component } from 'react'
import styles from './HornedBeasts.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default class HornedBeast extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      alt: ''
    }
  }
  handleButtonClick = () => {

    this.setState(state => ({ counter: state.counter + 1, alt: '' }))
  }

  handleImgClick = (e) => {

    this.setState(() => ({ alt: e.target.alt }), this.helperFunction)

  }

  /* A function that is called when the state is set, so I can pass current state as a parameter for parents  */
  helperFunction = () => {
    this.props.onWhichClicked(this.state)
  }

  render() {

    return (
      <>

        <Card className={styles.card}>
          <Card.Img onClick={this.handleImgClick} className={styles['horned-img']} variant="top" alt={this.props.data.title} src={this.props.data.image_url} />
          <Card.Body className={styles['card-body']}>
            <Card.Title>{this.props.data.title}</Card.Title>
            <Card.Text>
              {this.props.data.description}
            </Card.Text>
            <footer className={styles['card-footer']}>
              <Button onClick={this.handleButtonClick} variant="primary" className={styles.button}>Click to Vote</Button>
              <h3>{!this.state.counter ? '' : 'Total Votes: ❤️' + this.state.counter}</h3>
            </footer>
          </Card.Body>
        </Card>


      </>
    )
  }
}
