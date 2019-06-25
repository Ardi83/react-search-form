import React, { Component } from 'react'

class imageCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      span: ''
    }

    this.imageRef = React.createRef()
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight
    const span = Math.ceil(height/10 +1);
    this.setState({ span })
  }

  render() {
    const { description, urls:{regular} } = this.props.image
    return (
      <div style={{ gridRow: `span ${this.state.span}`}}>
        <img 
        ref={this.imageRef}
        alt={description}
        src={regular}
        />
      </div>
    )
  }
}

export default imageCard