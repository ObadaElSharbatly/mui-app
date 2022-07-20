import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import avatar from "../../images/AvatarMaker.png";
import { Link } from "react-router-dom";

function Header() {
  //write code here

  return (
    <Box
      component="header"
      bgcolor="background.msg"
      sx={{ height: "70px", display: "flex", alignItems: "center" }}
    >
      <Container sx={{ height: "100%" }}>
        <Grid
          container
          justifyContent={"space-between"}
          alignItems="center"
          sx={{
            height: "100%",
            width: "100%",
          }}
        >
          <Grid item color="#fff">
            <Link to="/">
              <Typography
                variant="h4"
                component="p"
                fontWeight={800}
                color="#fff"
              >
                Movie App
              </Typography>
            </Link>
          </Grid>

          <Grid item>
            <Avatar alt="profile" src={avatar} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Header;
