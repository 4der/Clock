import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.startTime()
  }

  componentWillUnmount() {
    this.freezeTime()
  }

  freezeTime = () => {
    clearInterval(this.timerID)
  }

  startTime = () => {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Hello, world!</h1>
        <h2>The time is: {this.state.date.toLocaleTimeString()} in Sweden right now.</h2>

        <div className="buttons">
          <button onClick={this.freezeTime}>
        Stop Time
          </button>

          <button onClick={this.startTime}>
        Start Time
          </button>
        </div>
      </div>
    )
  }

}

ReactDOM.render(<Clock />, document.getElementById("root"))
