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
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function TVOptions(props) {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

 
  return (
    <>
      <FormControl className={classes.formControl} variant='outlined'>
        <InputLabel ref={inputLabel} id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.category}
          onChange={event => props.onSearchShowChange(event.target.value)}
          labelWidth={labelWidth}
        >
          <MenuItem value='airing_today'>airing_today</MenuItem>
          <MenuItem value='on_the_air'>on_the_air</MenuItem>
          <MenuItem value='popular'>Popular</MenuItem>
          <MenuItem value='top_rated'>top_rated</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}