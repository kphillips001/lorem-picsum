import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 300
  },
  media: {
    height: 200
  }
});

const ImageCard = props => {
  const classes = useStyles();

  return (
    <Card classname = {classes.root}>
      <CardMedia 
        style={{height: 0, paddingTop: '56.25%'}}
        image={props.item.download_url}
      />  
      <Typography variant='body2'>{props.item.author}</Typography>
    </Card>
  );
};

export default ImageCard; 
