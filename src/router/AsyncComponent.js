import React, { Component } from 'react';

export default function asyncComponent(importComponent) {

  class AsyncComponent extends Component {

    constructor(props) {
      super(props);

      this.state = {
        component: null,
      };
    }

    componentDidMount() {
      importComponent().then(res => {
        console.log(res);
        const {default: component} = res;
        this.setState({
          component
        });
      });
    }

    render() {
      const C = this.state.component;

      return C
        ? <C {...this.props} />
        : null;
    }

  }

  return AsyncComponent;
}