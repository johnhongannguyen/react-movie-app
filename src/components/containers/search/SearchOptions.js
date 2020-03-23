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
}));

const SearchOptions = (props) => {
    const classes = useStyles();
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    return (
      <>
        <FormControl className={classes.formControl} variant='outlined'>
          <InputLabel ref={inputLabel} >Search Type</InputLabel>
          <Select
           labelWidth={labelWidth}
            value={props.category}
            onChange={event => props.onSearchTypeChange(event.target.value)}
           
          >
            <MenuItem value='multi'>Multi</MenuItem>
            <MenuItem value='movie'>Movies</MenuItem>
            <MenuItem value='tv'>TV Shows</MenuItem>
          </Select>
        </FormControl>
      </>
    );
  }

  export default SearchOptions