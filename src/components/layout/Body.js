import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { setDot, removeDots } from "../../actions/dot";

import MainSvg from "../svg/MainSvg";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import styles from "./Body.module.css";

const Body = ({ setDot, removeDots, dots }) => {
  const insideCircle = () => {
    return dots.length;
  };

  const insideSquare = () => {
    return dots.length;
  };

  return (
    <Grid container spacing={3} style={{ width: "100%", marginTop: "2%" }}>
      <Grid item xs={12} sm={6}>
        <MainSvg style={svgStyle}></MainSvg>
      </Grid>
      <Grid item xs={12} sm={6} direction='column' container>
        <Grid
          container
          spacing={3}
          style={{ width: "100%", marginTop: "2%" }}
          direction='row'
        >
          <Grid item xs={12} sm={4}>
            {" "}
            <Button
              variant='contained'
              className={styles.button}
              color='primary'
              onClick={() => {
                setDot({
                  id: uuidv4(),
                  x: getRandomInt(0, 200),
                  y: getRandomInt(0, 200)
                });
              }}
            >
              Generate Dot
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            {" "}
            <Button
              className={styles.button}
              variant='contained'
              color='primary'
              onClick={() => {
                [...Array(100).keys()].map(() => {
                  setDot({
                    id: uuidv4(),
                    x: getRandomInt(0, 200),
                    y: getRandomInt(0, 200)
                  });
                });
              }}
            >
              Add 100 Dots
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            {" "}
            <Button
              onClick={() => removeDots()}
              className={styles.button}
              variant='contained'
              color='primary'
            >
              Remove All
            </Button>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
          style={{ width: "100%", marginTop: "5%" }}
          direction='row'
        >
          <p>
            Number of entries inside a Circle: <strong>{insideCircle()}</strong>
          </p>
        </Grid>
        <Grid
          container
          spacing={3}
          style={{ width: "100%", marginTop: "0%" }}
          direction='row'
        >
          <p>
            Number of entries inside a Square: <strong>{44}</strong>
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

Body.propTypes = {
  setDot: PropTypes.func.isRequired,
  removeDots: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  dots: state.dots
});

export default connect(
  mapStateToProps,
  { setDot, removeDots }
)(Body);

const svgStyle = {
  marginTop: "50px"
};
