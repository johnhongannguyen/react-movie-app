import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import SearchOptions from '../options/SearchOptions'


const useStyles = makeStyles(theme =>({
    form:{
        alignItems: 'center',
        justifyContent: 'center',
        width:'50%', 
        marginRight:'auto', 
        marginLeft:'auto'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
      },
      btn:{
        margin: theme.spacing(1)
      },

}));
const FormSearch = () => {
    const classes = useStyles()
    return (
        <div>
            <form className={classes.form} onSubmit={this.props.onSubmit}>
        <TextField 
            className={classes.TextField}
            label='Search'
            margin='normal'
            name='query'
            variant='outlined'
            onChange ={event => this.props.onSearchChange(event.target.value)}
            fullWidth
        />
        <SearchOptions onChangeSearchType={this.props.onChangeSearchType} category={this.props.category}/>
        <Button className={classes.btn} type='submit' variant='contained' color='primary' >Search</Button>
            </form>
        </div>
    )

}

export default FormSearch;