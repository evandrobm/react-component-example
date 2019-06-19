import React, { Component } from 'react';

export default class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      interval: null,
    };
  }

  componentDidMount() {
    const interval = setInterval(() => {
      this.setState((state, props) => ({ counter: state.counter + 1 }));
    }, 1000);
    this.setState({ interval });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    const { counter } = this.state;
    return <h1>Example {counter}</h1>;
  }
}
