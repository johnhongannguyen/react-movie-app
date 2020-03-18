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
const MovieOptions = props =>{
    const classes = useStyles();

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
      }, []);
    
    return(
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={props.category}
            onChange={event => props.onChangeSearchType(event.target.value)}
            labelWidth={labelWidth}>
        
            <MenuItem value='now_playing'>Now Playing</MenuItem>
             <MenuItem value='popular'>Popular</MenuItem>
             <MenuItem value='top_related'>Top Related</MenuItem>
            <MenuItem value='upcoming'>UpComing</MenuItem>  
          </Select>
        </FormControl>
    )

}

export default MovieOptions;