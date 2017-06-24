import React from 'react';

import {LinearGauge} from 'canvas-gauges';

class ReactLinearGauge extends React.Component {
  componentDidMount() {
    const options = {};
    options.assign(this.props, {
      renderTo: this.el
    });
    new LinearGauge(options).draw();
  }

  render() {
    return (
      <canvas ref={(canvas) => {
        this.el = canvas;
      }}></canvas>
    );
  }
}

export default ReactLinearGauge;
