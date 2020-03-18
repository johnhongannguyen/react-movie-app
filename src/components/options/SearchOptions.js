import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme =>({
    formControl:{
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}));
const SearchOptions = props =>{
    const classes = useStyles();

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
      }, []);
    
    return(
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Search Type</InputLabel>
            <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={props.category}
            onChange={event => props.onChangeSearchType(event.target.value)}
            labelWidth={labelWidth}>
        
            <MenuItem value='TV'>TV</MenuItem>
             <MenuItem value='Movies'>Movies</MenuItem>
            <MenuItem value='Multi'>Multi</MenuItem>  
          </Select>
        </FormControl>
    )
}

export default SearchOptions;
