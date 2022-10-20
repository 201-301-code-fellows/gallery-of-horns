import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import styles from './Header.module.css'
export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      selection: ''
    }
  }

  handleChanges = (e) => {

    this.setState({ selection: e.target.value }, this.handleChangesCallback)
  }
  handleChangesCallback = () => {
    this.props.onSelectFilter(this.state)
  }

  render() {
    return (
      <nav>
        <h1>Horned Beasts!</h1>
        <div className={styles.selection}>
          <Form.Select onChange={this.handleChanges} aria-label="Filter by number of horns">
            <option value=''>Filter by number of horns</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">Hundred</option>
          </Form.Select>
        </div>
      </nav>
    )
  }
}
