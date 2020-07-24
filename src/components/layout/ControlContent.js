import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import { setDot, removeDots } from "../../actions/dot";
import styles from "./ControlContent.module.css";
import { Button } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";

import { v4 as uuidv4 } from "uuid";

const ControlContent = ({ setDot, removeDots }) => {
  return (
    <Fragment>
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
            style={controllButton}
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
            style={controllButton}
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
            style={controllButton}
            variant='contained'
            color='primary'
          >
            Remove All
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

ControlContent.propTypes = {
  setDot: PropTypes.func.isRequired,
  removeDots: PropTypes.func.isRequired
};

export default connect(
  null,
  { setDot, removeDots }
)(ControlContent);

const controllButton = {
  width: "100%",
  margin: "0 10px"
};
