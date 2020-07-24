import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Description = ({ dots }) => {
  const insideCircle = () => {
    return dots.filter(d => {
      return (
        Math.pow(d.x - 100, 2) + Math.pow(d.y - 100, 2) <= Math.pow(100, 2)
      );
    }).length;
  };

  const insideSquare = () => {
    return dots.length;
  };

  return (
    <Fragment>
      <div
        container
        spacing={3}
        style={{ ...getDiv, width: "100%", marginTop: "5%" }}
        direction='row'
      >
        <p>
          Number (<strong>N1</strong>) of entries inside a Circle:{" "}
          <strong>{insideCircle()}</strong>
        </p>
      </div>
      <div
        container
        spacing={3}
        style={{ ...getDiv, width: "100%", marginTop: "0%" }}
        direction='row'
      >
        <p>
          Number (<strong>N2</strong>) of entries inside a Square:{" "}
          <strong>{insideSquare()}</strong>
        </p>
      </div>

      <div
        container
        spacing={3}
        style={{
          ...getDiv,
          width: "80%",
          marginTop: "1%",
          marginBottom: "3%",
          border: "1px solid darkgreen",
          padding: "5px"
        }}
        direction='row'
      >
        <img
          src='https://cdn.pixabay.com/photo/2016/04/13/16/09/pi-1327145_960_720.png'
          alt=''
          width={12}
          style={{ paddingTop: "10px" }}
        />{" "}
        = 4 &middot; N1/N2 ={" "}
        <strong>
          {insideSquare() !== 0
            ? Math.round((4 * 100000 * insideCircle()) / insideSquare()) /
              100000
            : "Not defined"}
        </strong>
      </div>

      <div
        container
        spacing={3}
        style={{ ...getDiv, width: "100%", marginTop: "2%" }}
        direction='row'
      >
        <strong>Square</strong>: S = a&#178;
      </div>
      <div
        container
        spacing={3}
        style={{
          ...getDiv,
          width: "100%",
          marginTop: "2%"
        }}
        direction='row'
      >
        <strong>Circle</strong>:{" S = "}
        <img
          src='https://cdn.pixabay.com/photo/2016/04/13/16/09/pi-1327145_960_720.png'
          alt=''
          width={12}
          style={{ paddingTop: "10px" }}
        />
        &middot;r&#178; ={" "}
        <img
          src='https://cdn.pixabay.com/photo/2016/04/13/16/09/pi-1327145_960_720.png'
          alt=''
          width={12}
          style={{ paddingTop: "10px" }}
        />
        &middot;a&#178;/4
      </div>

      <div
        container
        spacing={3}
        style={{ ...getDiv, width: "100%", marginTop: "2%" }}
        direction='row'
      >
        <strong>A Rule</strong>: N1/N2 = S (circle) / S (square)
      </div>
    </Fragment>
  );
};

Description.propTypes = {
  dots: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  dots: state.dots
});

const getDiv = {
  textAlign: "left"
};

export default connect(
  mapStateToProps,
  {}
)(Description);
