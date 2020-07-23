import React, { Component } from "react";

class SVGComponent extends Component {
  render() {
    return (
      <svg {...this.props} viewBox='0 0 100 100'>
        {this.props.children}
      </svg>
    );
  }
}

class Circle extends Component {
  render() {
    return <circle {...this.props}>{this.props.children}</circle>;
  }
}

class MakeCircles extends Component {
  render() {
    return (
      <div>
        <SVGComponent height='100%' width='100%'>
          <Circle
            cx='50%'
            cy='50%'
            r='30%'
            fill='none'
            stroke='green'
            strokeWidth='2'
          />
          {/* <text textAnchor='middle' x='25%' y='25%'>
            Circle Text
          </text> */}
        </SVGComponent>
      </div>
    );
  }
}

export default MakeCircles;
