import {h, render, Component} from 'preact';

class Timer extends Component {
  constructor() {
    super();
    //Set start time
    this.state.time = Date.now();
  }

  componentDidMount() {
    //Update timer every second
    this.timer = setInterval(() => {
      this.setState({time: Date.now()});
    }, 1000);
  }

  componentWillUnmount() {
    //Stop timer
    clearInterval(this.timer);
  }

  render () {
    let time = new Date().toLocaleTimeString();
    return <p>{time}</p>;
  }
}

export default Timer;
