import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import SearchOptions from '../containers/search/SearchOptions'
import Container from "@material-ui/core/Container"

const getStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "2rem auto"
  },
  btn: {
    margin: theme.spacing(1)
  },
   textField: {
    marginLeft: theme.spacing(1),
    width: 500,
    marginRight: 8
  }
}))

const FormSearch = props => {
  const classes = getStyles()
  return (
    <Container>
    <form autoComplete="off" className={classes.form} onSubmit={props.onSubmit}>
      <TextField
        className={classes.textField}
        label='Search'
        margin='normal'
        name='query'
        onChange={event => props.onSearchInputChange(event.target.value)}
        variant='outlined'
        fullWidth
      />
      <SearchOptions onSearchTypeChange={props.onSearchTypeChange} category={props.category}/>
      <Button type='submit' variant='contained'   color='primary' className={classes.btn}>
        Search
      </Button>
    </form>
    </Container>
  )
}

export default FormSearch
