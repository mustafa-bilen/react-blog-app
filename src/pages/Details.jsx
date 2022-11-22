import React from "react";
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
const Details = () => {
  return (
    <Layout>
      <p className="text-4xl text-center mt-5">✰ Details ✰</p>
      <Card sx={{ maxWidth: "90vw" }} className="mx-auto mt-5">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "black" }} aria-label="recipe"></Avatar>
          }
          action={<IconButton aria-label="settings"></IconButton>}
          title="mustafabilen6669@gmail.com"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://i.pinimg.com/736x/a4/6f/fb/a46ffbcc9f91c694b011995795c4ae04.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
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
