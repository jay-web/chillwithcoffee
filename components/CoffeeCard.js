import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Link from "next/link"

 const CoffeeCard = (props) => {
     const {id, name, imgUrl, websiteUrl, address, neighbourhood} = props.store;
     const {pass} = props;
  return (
      <Link href={`./coffee-store/${id}`}>
    <Card sx={{ maxWidth: 500, minHeight: 250 , maxHeight: 300}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={imgUrl}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {address}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {neighbourhood}
        </Button>
      </CardActions>
    </Card>
    </Link>
  );
}


export default CoffeeCard;