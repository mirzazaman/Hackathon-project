import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useRestCards from './useRestCards';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
  },
});

export default function RestCard({ RestaurantList }) {
  const classes = useStyles();
  const [] = useRestCards()

  return (
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"space-evenly"}}>
        {
          RestaurantList.map((item) => {
            return (
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={item.restImage}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.restName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {item.restDesc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            )
          })
        }
      </div>
  );
}