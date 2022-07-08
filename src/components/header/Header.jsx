import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./header.css";
import avatar from "../../images/AvatarMaker.png";
import { Link } from "react-router-dom";

function Header() {
  //write code here

  return (
    <header>
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
          <Grid item>
            <Link to="/">
              <Typography
                variant="h4"
                component="a"
                sx={{ color: "white", fontSize: "20pt", fontWeight: "700" }}
              >
                Movie APP
              </Typography>
            </Link>
          </Grid>

          <Grid item>
            <Avatar alt="profile" src={avatar} />
          </Grid>
        </Grid>
      </Container>
    </header>
  );
}

export default Header;
