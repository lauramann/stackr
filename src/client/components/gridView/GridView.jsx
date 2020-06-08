import React from "react";
import { Avatar, Box, Grid } from "grommet";
import AppBar from "../app/AppBar";
import GridRow from "./GridRow";
import './GridView.css';

const GridView = ({ data, postalCode }) => {
  console.log("DATA", data);
  console.log(JSON.stringify(data));
  console.log("POSTAL CODE", postalCode);
  return (
    <Box>
      <AppBar />
      <Box pad="50px" background="#F3EEEB" className="grid-view__container">
        <Box align="center" className="results-copy__container">
          <p>
            These are the latest deals for your area:
          </p>
          <h3>{postalCode}</h3>
        </Box>
        {data &&
          data.slice(0,15).map((item, index) => {
            return (
              item.offer &&
              item.flippItems.length > 0 && (
                <Box className="results-data__container">
                  <Grid columns={["min-content", "auto"]} gap="small">
                    <Avatar src={item.offer.offer_img} />
                    <Box className="c51__container">
                      <p className="c51-amount">
                        ${item.offer.cash_back_amount} cash back
                      </p>
                      <p className="c51-name">
                        {item.offer.offer_name}
                      </p>
                    </Box>
                  </Grid>
                  <p className="c51-description">
                    {item.offer.offer_description}
                  </p>
                  <GridRow item={item} />
                </Box>
              )
            );
          })}
      </Box>
    </Box>
  );
};

export default GridView;
