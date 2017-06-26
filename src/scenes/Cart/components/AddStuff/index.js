import {h, render, Component} from 'preact';
import localforage from 'localforage';

class AddStuff extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.addStuff = this.addStuff.bind(this);
  }

  handleInput(e) {
    this.setState({
      input: e.target.value
    });
  }

  addStuff() {
    localforage.setItem('storage', this.state.input).then(value => {
      console.log(value);
    });
  }

  render({}, {input}) {
    return (
      <form>
        Stuff to add to local storage:<br />
        <input type="text" value={input} onInput={this.handleInput}/><br />
        <button onClick={this.addStuff}>Add stuff</button>
      </form>
    );
  }
};

export default AddStuff;
