# react-canvas-gauges

> ## ⚠️ Deprecated / Unmaintained
>
> This project is **no longer maintained** and the GitHub repository has been **archived**. The npm package has been deprecated.
>
> - Last release: **v1.2.1 (June 2017)**.
> - Targets React 15 and uses lifecycle methods (`componentWillReceiveProps`) that were removed/renamed in React 17 — it will not work cleanly on modern React.
> - The upstream [`canvas-gauges`](https://github.com/Mikhus/canvas-gauges) library itself has been inactive since 2020.
>
> ### Recommended alternatives
>
> - [`react-gauge-component`](https://github.com/antoniolago/react-gauge-component) — actively maintained SVG-based gauges.
> - [`@mui/x-charts` Gauge](https://mui.com/x/react-charts/gauge/) — gauge component from MUI X.
> - [KendoReact Gauges](https://www.telerik.com/kendo-react-ui/components/gauges) — commercial, enterprise-grade.
>
> Thanks to everyone who used and contributed to this project over the years.

---

[![GitHub stars](https://img.shields.io/github/stars/1995parham/react-canvas-gauges.svg?style=flat-square)](https://github.com/1995parham/react-canvas-gauges/stargazers)
[![npm version](https://img.shields.io/npm/v/react-canvas-gauges.svg?style=flat-square)](https://www.npmjs.com/package/react-canvas-gauges)
[![npm license](https://img.shields.io/npm/l/react-canvas-gauges.svg?style=flat-square)]()

## Introduction
Canvas gauges component is based on [canvas-gauges](https://canvas-gauges.com/) for React.
## Installation
```
npm install react-canvas-gauges --save
```
## Example
```jsx
<RadialGauge
   units='°C'
   title='Temperature'
   value={this.state.temperature}
   minValue={0}
   maxValue={50}
   majorTicks={['0', '5', '15', '20', '25', '30', '35', '40', '45', '50']}
   minorTicks={2}
></RadialGauge>
```
