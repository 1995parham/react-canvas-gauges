import React from 'react';

import {RadialGauge} from 'canvas-gauges';

class ReactRadialGauge extends React.Component {
  componentDidMount() {
    const options = {};
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

export default ReactRadialGauge;
