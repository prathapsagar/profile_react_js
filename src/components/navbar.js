import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";


function navbar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: "#0039a6" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Profile
            </Typography>
            <Link to="projects">
              <Button
                style={{
                  backgroundColor: "black",
                  color: "grey",
                  fontSize: "10px",
                }}
              >
                Projects
              </Button>
            </Link>
            <Link to="/">
              <Button style={{ color: "black" }}>
                <div>
                  <HomeIcon />
                </div>
              </Button>
            </Link>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1sx8nzg3UgDlp0nHiBAdArMbc2xmfd2ND/view?usp=sharing"
            >
              <Button
                style={{
                  backgroundColor: "black",
                  color: "grey",
                  fontSize: "10px",
                }}
              >
                <div>Resume</div>
              </Button>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/prathap-sagar-493a95152/"
            >
              <Button style={{ color: "black" }}>
                <div>
                  <LinkedInIcon />
                </div>
              </Button>
            </a>
            <a target="_blank" href="https://github.com/prathapsagar">
              <Button style={{ color: "black" }}>
                <div>
                  <GitHubIcon />
                </div>
              </Button>
            </a>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default navbar
