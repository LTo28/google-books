import React from 'react'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './style.css'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const Searchbar = () => {
  const classes = useStyles();
  return (
    <div className='searchbar'>
      <div className='booksearch'>
        <form method='POST' action='/api/search'>
          <Input type='text' placeholder='Search' name='search' />
          <Button className='Button' variant='contained' color='primary' className={classes.button}>ENTER</Button>
        </form>
      </div>
    </div>
  )
}

export default Searchbar