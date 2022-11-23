import React, { useContext } from "react";
import Layout from "../components/Layout";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import { useLocation } from "react-router-dom";
const Details = () => {
  const { state: details } = useLocation();
  return (
    <Layout>
      <p className="text-4xl text-center mt-5">✰ Details ✰</p>
      <Card sx={{ maxWidth: "90vw" }} className="mx-auto mt-5">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "black" }} aria-label="recipe"></Avatar>
          }
          action={<IconButton aria-label="settings"></IconButton>}
          title={details.username}
          subheader={details.logdate}
        />
        <CardMedia
          component="img"
          height="194"
          image={details.image}
          alt="Paella dish"
        />
        <Typography
          sx={{ textAlign: "center", mt: "1.5rem", fontSize: "2rem" }}
        >
          {details.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {details.textArea}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <CommentIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Layout>
  );
};

export default Details;
