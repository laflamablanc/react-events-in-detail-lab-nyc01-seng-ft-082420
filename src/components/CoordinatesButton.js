import React from 'react'

class CoordinatesButton extends React.Component {

  renderArray = (e) => {
    let coordinates = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(coordinates)

  }

  render() {
    return (
      <button onClick={this.renderArray}/>
    )
  }
}

export default CoordinatesButton
