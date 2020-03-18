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
const TVOptions = props =>{
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
        
            <MenuItem value='airing_today'>Airing Today</MenuItem>
             <MenuItem value='on_the_air'>On The Air</MenuItem>
             <MenuItem value='popular'>Popular</MenuItem>
            <MenuItem value='top_related'>Top Related</MenuItem>  
          </Select>
        </FormControl>
    )

}

export default TVOptions;