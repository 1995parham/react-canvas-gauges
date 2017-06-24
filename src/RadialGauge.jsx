import React from 'react';

import {RadialGauge} from 'canvas-gauges';

class RadialGauge extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let options = {}
    options.assign(this.props, {
      renderTo: this.el
    });
    new RadialGauge(options).draw();
  }

  render() {
    return (
      <canvas ref={(canvas) => {
        this.el = canvas;
      }}></canvas>
    );
  }
}

export default RadialGauge;
