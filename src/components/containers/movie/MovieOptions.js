import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));
 const MovieOptions = (props) => {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <>
      <FormControl className={classes.formControl} variant='outlined'>
        <InputLabel ref={inputLabel} >Category</InputLabel>
        <Select
          value={props.category}
          onChange={event => props.onSearchMovieChange(event.target.value)}
          labelWidth={labelWidth} 
        >
          <MenuItem value='now_playing'>now_playing</MenuItem>
          <MenuItem value='popular'>popular</MenuItem>
          <MenuItem value='top_rated'>top_rated</MenuItem>
          <MenuItem value='upcoming'>upcoming</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default MovieOptions