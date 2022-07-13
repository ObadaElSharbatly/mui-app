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
              <p className="project-name">Movie App</p>
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
