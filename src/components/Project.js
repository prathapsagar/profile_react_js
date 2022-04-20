import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import food_app from "../assets/Food_app.png";
import questions_forum from "../assets/questions_forum.png";
import student_mentor from "../assets/Student_mentor.png";
import video_stream from "../assets/Video_Streaming_App.png";

function Project() {
  const data = [
    {
      name: "Video Streaming App",
      image: video_stream,
      url: "https://cocky-poincare-61f4c2.netlify.app/",
      desc: "Video Streaming which allows user to sign up and login. The user can upload and stream the video anytime. The is built using MERN stack and firebase for storing video in cloud",
    },
    {
      name: "Questions Forum App",
      image: questions_forum,
      url: "https://soft-croquembouche-c1a4d3.netlify.app/",
      desc: "Forum App built using MERN Stack. It allows user to signup and login and Users Can ask question and answer already posted questions",
    },

    {
      name: "Student Mentor App",
      image: student_mentor,
      url: "https://infallible-ramanujan-d19c6c.netlify.app/",
      desc: "Student Mentor App built using MERN Stack. It allows user to add a student or mentor. the users can also change mentos assigned to students",
    },
    {
      name: "Food App",
      image: food_app,
      url:"https://loving-hoover-714dbe.netlify.app/",
      desc: "Food delivery app built using react and node js. A public food api used for fetching food list and user can add the food to cart and order it",
    },
  ];
  return (
    <>
      <h1
        style={{
          width: "60%",
          marginLeft: "5%",
          color: "#ADD8E6",
        }}
      >
        Projects:
      </h1>

      {data.map((e, i) => {
        return (
          <div class="wrapper">
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={e.image}
                alt="green iguana"
              />
              <CardContent style={{ backgroundColor: "#002244" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="#ADD8E6"
                >
                  {e.name}
                </Typography>
                <Typography variant="body2" color="#ADD8E6">
                  {e.desc}
                </Typography>
                <Typography
                  style={{ backgroundColor: "white", textAlign: "center" }}
                >
                  <a
                    target="_blank"
                    href={e.url}
                  >
                    <Button style={{ color: "#002244" }} size="small">
                      Visit Website
                    </Button>
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </>
  );
}

export default Project;
