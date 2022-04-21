import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import profile_image from "../assets/profile_image.svg";


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
        <h1>I'm Prathap Sagar S</h1>
        <p style={{ fontSize: "20px" }}>
          I am inquisitive web developer. Looking for Job in Javascript web development. I
          want to join a organisation which allows my professional growth and contribute to the orgnaisation in a significant scale. I am well versed in react js, express js and node js.
        </p>
      </div>

      <div class="my_wrapper">
        <Card>
          <CardMedia
            component="img"
            height="300"
            image="https://t3.ftcdn.net/jpg/02/10/13/10/360_F_210131011_3Al2qkDcwsmCHzLuyyGTCmsScqjZinTb.jpg"
            alt="Image"
          />
          <CardContent style={{ backgroundColor: "#002244" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="#ADD8E6"
            >
              <p>Contact Details:</p>
            </Typography>
            <Typography
              variant="body2"
              color="#ADD8E6"
              style={{ fontSize: "20px" }}
            >
              <p>Email: prathapsagar0306@gmail.com</p>
            </Typography>
            <Typography
              variant="body2"
              color="#ADD8E6"
              style={{ fontSize: "20px" }}
            >
              <p>Mobile Number: 9036406836</p>
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
            <p style={{ fontSize: "25px" }}>{e.skill}</p>
          </div>
        );
      })}
    </div>
  );
}

export default profile
