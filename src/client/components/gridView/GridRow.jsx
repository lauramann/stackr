import React from "react";
import { Box, Grid } from "grommet";
import Card from "./Card";

const GridRow = ({ item }) => {
  return (
      <Grid
        style={{
          overflowX: "scroll",
          overflowY: "hidden",
          whiteSpace: "nowrap",
          gridTemplateColumns:
            "repeat(" + item.flippItems.length + ", calc(44% - 40px))",
        }}
        gap="small"
      >
        {item.flippItems.map((flipp, i) => {
          return <Card flippItem={flipp} />;
        })}
      </Grid>
  );
};

export default GridRow;
