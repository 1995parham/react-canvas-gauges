import React from 'react';

import {LinearGauge} from 'canvas-gauges';

class LinearGauge extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let options = {}
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

export default LenearGauge;
