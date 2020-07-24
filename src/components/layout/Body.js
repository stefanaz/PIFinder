import React from "react";

import MainSvg from "../svg/MainSvg";
import Grid from "@material-ui/core/Grid";

import ControlContent from "./ControlContent";
import Description from "./Description";

const Body = props => {
  return (
    <Grid container spacing={3} style={mainGrid}>
      <Grid item xs={12} sm={6}>
        <MainSvg style={svgStyle}></MainSvg>
      </Grid>
      <Grid item xs={12} sm={6} direction='column' container>
        <Grid>
          <span style={{ fontSize: "25px" }}>Funny - </span>{" "}
          <img
            src='https://cdn.pixabay.com/photo/2016/04/13/16/09/pi-1327145_960_720.png'
            alt=''
            width={25}
            style={{ paddingTop: "10px" }}
          />{" "}
          <span style={{ fontSize: "25px" }}> - Finder</span>{" "}
        </Grid>
        <ControlContent style={mainGrid}></ControlContent>
        <Description style={mainGrid}></Description>
      </Grid>
    </Grid>
  );
};

export default Body;

const svgStyle = {
  marginTop: "50px"
};

const mainGrid = {
  width: "100%",
  marginTop: "2%",
  margin: "auto"
};
