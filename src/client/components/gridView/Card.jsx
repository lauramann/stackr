import React from "react";
import { Avatar, Box, Grid } from "grommet";
import "./GridView.css";

const Card = ({ flippItem }) => {
  return (
    <Box className="card__container" round="small" background="#FFF" pad="20px">
      <Grid columns={["40%", "60%"]} gap="small">
        <Avatar size="large" src={flippItem.clean_image_url} round="xsmall" />
        <Box className="card__copy">
          <p className="flipp-merchant">{flippItem.merchant_name}</p>
          <p className="flipp-name">{flippItem.name}</p>
          {flippItem.current_price && (
            <p className="flipp-price">${flippItem.current_price}</p>
          )}
        </Box>
      </Grid>
    </Box>
  );
};

export default Card;
