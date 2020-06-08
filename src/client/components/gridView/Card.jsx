import React from "react";
import { Avatar, Box, Grid } from "grommet";

const Card = ({ flippItem }) => {
  return (
    <Box round="small" background="#FFF" pad="20px" style={{whiteSpace: "break-spaces"}}>
      <Grid columns={["40%", "60%"]} gap="small">
        <Avatar size="large" src={flippItem.clean_image_url} />
        <Box style={{ fontSize: "16px", fontWeight: "500" }}>
          <p>{flippItem.name}</p>
          <p style={{ color: "green" }}>${flippItem.current_price}</p>
        </Box>
      </Grid>
    </Box>
  );
};

export default Card;
