import React, { Component } from "react";

class SVGComponent extends Component {
  render() {
    return (
      <svg {...this.props} viewBox='-5 -5 210 210'>
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

class Rect extends Component {
  render() {
    return <rect {...this.props}>{this.props.children}</rect>;
  }
}

class MakeCircles extends Component {
  state = {
    dots: [
      {
        x: 25,
        y: 14
      },
      {
        x: 44,
        y: 44
      },
      {
        x: 125,
        y: 114
      }
    ]
  };

  render() {
    return (
      <div>
        <SVGComponent height='210' width='210'>
          <Circle
            cx='100'
            cy='100'
            r='100'
            fill='none'
            stroke='#00743F'
            strokeWidth='2'
          />
          <Rect
            x='0'
            y='0'
            width='200'
            height='200'
            fill='none'
            stroke='#1D65A6'
            strokeWidth='2'
          />
          {this.state.dots.map(d => {
            return (
              <Circle
                cx={d.x}
                cy={d.y}
                r='1'
                fill='lightgrey'
                stroke='black'
                strokeWidth='1'
              />
            );
          })}
        </SVGComponent>
      </div>
    );
  }
}

export default MakeCircles;
