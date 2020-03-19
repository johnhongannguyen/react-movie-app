import React from 'react';
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
    card:{
        display: "flex",
        alignItems: "center",
        marginBottom: "1rem"
    },
    cardContent1: {
        width: "40%",
        padding: 0
      },
      cardContent2: {
        width: "60%"
      },
      imgRoot :{
        height: '250px',
        width:'100%',
        maxWidth:'170px'
      }
});
const CardItem = props =>{
    const classes = useStyles();
    const { title, 
            id, 
            poster_path, 
            popularity, 
            release_date, 
            overview, 
            name, 
            first_air_date} = props
    const dateShowing = release_date ? release_date : first_air_date

    let logo_path

  if(poster_path){
    logo_path = "https://image.tmdb.org/t/p/w500/" + poster_path
  }else{
    logo_path = 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'
  }

  return(
      <Card className={classes.card} key={id}>
          <CardContent className={classes.cardContent1}>
              <CardMedia item>
                  <img className={classes.imgRoot} 
                        src={logo_path}> </img>

              </CardMedia>
          </CardContent>

          <CardContent className={classes.cardContent2}>
              <Typography>
                <Box >{title || name}</Box>
              </Typography>
              <Typography>
                <Box >Release Date:{dateShowing} | Popularity: {popularity}</Box>
              </Typography>
              <Typography>{overview}</Typography>
          </CardContent>
      </Card>
  )
}

export default CardItem;