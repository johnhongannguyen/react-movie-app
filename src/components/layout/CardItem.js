import React from "react";
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import { Box ,Typography } from "@material-ui/core"
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";


const getStyles = makeStyles({
  media: {
    height: '280px',
    width:'100%',
    maxWidth:'185px'
  },
  root:{
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem"
  },
  cardImg: {
    width: "20%",
    padding: 0
  },
  cardInfo: {
    width: "80%"
  }
})

const CardItem = props => {

  const {title, 
          name, 
          id, 
          poster_path, 
          release_date, 
          first_air_date, 
          popularity, 
          overview
          } = props
  
  const checkDate = release_date ? release_date : first_air_date
  
  let sourceImg = () =>{
  if(poster_path){
    return "https://image.tmdb.org/t/p/w500/"  + poster_path
  }else{
    return 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'
  }
}
  const classes = getStyles()
  return (
    <>
      <Card key={id} className={classes.root}>
        <CardContent className={classes.cardImg}
        container direction="row" 
        justify="flex-start" 
        alignItems="center" 
        spacing={2}>
          <CardMedia item className={classes.media} 
            src={sourceImg()} component="img" >
          </CardMedia>
          </CardContent>
          
          <CardContent className={classes.cardInfo}>
           <Typography 
              gutterBottom 
              variant='h5' 
              component='h2'>
                <Box textAlign='center'>
                  {title || name}
                </Box>
              </Typography>
              <Typography 
              gutterBottom 
              variant='body2' 
              color='textSecondary' 
              component='p'>
                <Box textAlign='center' marginBottom='2rem'>
                  Release Date : {checkDate} | Popularity: {popularity}
                </Box>
              </Typography>
              <Typography 
              gutterBottom 
              variant='body2' 
              color='textSecondary' 
              component='p'>
                {overview}
              </Typography>
            </CardContent>
        </Card>

        </>
  )
}

export default CardItem
