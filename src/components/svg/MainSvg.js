import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class SVGComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <svg {...this.props} viewBox='-5 -5 210 210'>
          {this.props.children}
        </svg>
      </React.Fragment>
    );
  }
}

class Circle extends Component {
  render() {
    return (
      <React.Fragment>
        <circle {...this.props}>{this.props.children}</circle>
      </React.Fragment>
    );
  }
}

class Rect extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <rect {...this.props}>{this.props.children}</rect>
      </React.Fragment>
    );
  }
}

class MakeCircles extends Component {
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
          {this.props.dots.map(d => {
            return (
              <Circle
                key={d.id}
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

MakeCircles.propTypes = {
  dots: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  dots: state.dots
});

export default connect(
  mapStateToProps,
  {}
)(MakeCircles);
