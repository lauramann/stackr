import React from "react";
import { Grid } from "grommet";
import Card from "./Card";
import "./GridView.css";

const GridRow = ({ item }) => {
  return (
    <Grid
      className="grid-row__container"
      gap="small"
      style={{
        gridTemplateColumns: `repeat(${item.flippItems.length}, 300px)`,
      }}
    >
      {item.flippItems.slice(0, 5).map((flipp, i) => {
        return <Card flippItem={flipp} />;
      })}
    </Grid>
  );
};

export default GridRow;
