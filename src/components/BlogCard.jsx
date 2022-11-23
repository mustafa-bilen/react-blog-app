import * as React from "react";
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
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export default function RecipeReviewCard({ data }) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{ maxWidth: 345 }}
      onClick={() => navigate(`/posts/${data.userId}`, { state: data })}
      className="cursor-pointer"
    >
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "black" }} aria-label="recipe"></Avatar>}
        action={<IconButton aria-label="settings"></IconButton>}
        title={data.username}
        subheader={data.logdate}
      />
      <CardMedia
        component="img"
        height="194"
        image={data.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.textArea}
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
  );
}
