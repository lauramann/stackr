import React from "react";
import { Avatar, Box, Grid } from "grommet";
import AppBar from "../app/AppBar";
import GridRow from './GridRow';

const GridView = ({ data, postalCode }) => {
  console.log("DATA", data);
  console.log("POSTAL CODE", postalCode);
  return (
    <Box>
      <AppBar />
      <Box pad="50px" background="#F3EEEB">
        <Box align="center">
          <p style={{ fontSize: "16px", margin: "0" }}>
            These are the latest deals for your area:
          </p>
          <h3 style={{ fontSize: "30px", marginTop: "15px" }}>{postalCode}</h3>
        </Box>
        {data &&
          data.map((item, index) => {
            return (
              item.offer &&
              item.flippItems.length > 0 && (
                <Box>
                  <Grid columns={["min-content", "auto"]} gap="small">
                    <Avatar src={item.offer.offer_img}/>
                    <Box style={{justifyContent:"center"}}>
                      <p style={{ fontSize: "16px", fontWeight: "500", color: "green", margin: "0" }}>${item.offer.cash_back_amount} cash back</p>
                      <p style={{ fontSize: "20px", fontWeight: "500", color: "black", margin: "0" }}>{item.offer.offer_name}</p>
                    </Box>
                  </Grid>
                  <p style={{ fontSize: "14px"}}>{item.offer.offer_description}</p>
                  <GridRow item={item}/>
                </Box>
              )
            );
          })}
      </Box>
    </Box>
  );
};

export default GridView;
