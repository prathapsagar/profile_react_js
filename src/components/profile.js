import React from 'react'
import Card from "@mui/material/Card";
import EmailIcon from "@mui/icons-material/Email";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CallIcon from "@mui/icons-material/Call";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";


function profile() {
   const data = [
     {
       skill: "React JS ",
     },
     {
       skill: "Node JS",
     },
     {
       skill: "Express JS",
     },
     {
       skill: " Python",
     },
     {
       skill: " Html",
     },
     {
       skill: " CSS",
     },
   ];  
  return (
    <div>
      <div class="profile_style">
        <h style={{ color: "#CCD6F6" }}>Hello, my name is </h>
        <h1 style={{ color: "#CCD6F6" }}>Hello,I'm Prathap Sagar S</h1>
        <h1 style={{ color: "#CCD6F6" }}>I love exploring new things!</h1>
        <p style={{ fontSize: "20px", color: "#64FFDA" }}>
          I am inquisitive web developer. Looking for Job in Javascript web
          development. I want to join a organisation which allows my
          professional growth and contribute to the orgnaisation in a
          significant scale. I am well versed in react js, express js and node
          js.
        </p>
        <p style={{ fontSize: "20px", color: "#64FFDA" }}>
          I enjoy learning new things in programming,physics and math.
        </p>
      </div>

      <div class="my_wrapper">
        <Card>
          <CardMedia
            component="img"
            height="300"
            image="https://thumbs.dreamstime.com/b/programmer-icon-filled-programmer-icon-website-design-mobile-app-development-programmer-icon-filled-occupation-157817734.jpg"
            alt="Image"
          />
          <CardContent style={{ backgroundColor: "#0C1C2C" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="#CCD6F6"
            >
              <h3>Contact Details:</h3>
            </Typography>
            <Typography
              variant="body2"
              color="#64FFDA"
              style={{ fontSize: "20px" }}
            >
              <p>
                <EmailIcon />: prathapsagar0306@gmail.com
              </p>
            </Typography>
            <Typography
              variant="body2"
              color="#64FFDA"
              style={{ fontSize: "20px" }}
            >
              <p>
                <CallIcon />: 9036406836
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
      <h1
        style={{
          width: "60%",
          marginLeft: "8%",
          color: "#ADD8E6",
        }}
      >
        Skills:
      </h1>

      {data.map((e, i) => {
        return (
          <div class="new_style">
            <p style={{ fontSize: "20px" }}>{e.skill}</p>
          </div>
        );
      })}
      <div>
        <h1
          style={{
            width: "60%",
            marginLeft: "8%",
            color: "#ADD8E6",
          }}
        >
          <u>Work Experience:</u>
        </h1>
        <h2
          style={{
            width: "60%",
            marginLeft: "10%",
            color: "#64FFDA",
          }}
        >
          <u>Cognizant (Nov/2020 to Present):</u>
        </h2>
        <div class="profile_style1">
          <p style={{ fontSize: "20px" }}>
            <ul>
              <li>
                Created multiple workflows for data ETL from multiple sources
                using IICS and SQL server. Delivered 3 various build on time
                with zero escalations.
              </li>
              <li>
                Debugged and enhanced multiple code blocks of pysparks on
                Databricks.
              </li>
            </ul>
          </p>
        </div>
        <h2
          style={{
            width: "60%",
            marginLeft: "10%",
            color: "#64FFDA",
          }}
        >
          <u> Fernandes Innovative Solutions (Internship):</u>
        </h2>
        <div class="profile_style1">
          <p style={{ fontSize: "20px" }}>
            <ul>
              <li>
                Devloped a Python Program to analyse the surface wear on metal
                surfaces. Using various python image pricessiong libraries like
                opencv,numpy,matplotlib
              </li>
            </ul>
          </p>
        </div>
        <h1
          style={{
            width: "60%",
            marginLeft: "8%",
            color: "#ADD8E6",
          }}
        >
          <u>Published Paper:</u>
        </h1>
        <h2
          style={{
            width: "60%",
            marginLeft: "10%",
            color: "#64FFDA",
          }}
        >
          <u> HEAT VISION BASED AC AND LIGHT AUTOMATION IOT</u>
        </h2>
        <div class="profile_style1">
          <p style={{ fontSize: "20px" }}>
            <ul>
              <li>
                One of a kind device built using Thermal camera. It can adjust
                Air Conditioner temperature by scanning body temperature in
                real-time using python as a programming language and YOLOV3 for
                human detection. Paper Link:
                <a
                  target="_blank"
                  href="https://www.irjet.net/archives/V7/i7/IRJET-V7I7103.pdf"
                >
                  <Button style={{ color: "#64FFDA" }}>
                    <div>
                      <OpenInNewIcon />
                    </div>
                  </Button>
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default profile
