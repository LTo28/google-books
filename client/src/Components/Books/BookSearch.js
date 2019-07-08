import React, { Component } from 'react';
import Axios from 'axios';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import './style.css'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

class BookSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      disabled: false
    }
  }

  componentDidMount() {
    let responseData
    Axios.get('/api/search')
      .then(({ data }) => {
        data.forEach(obj => {
          const { volumeInfo: { title, authors, description, imageLinks, infoLink } } = obj
          responseData = { title: title, authors: authors, description: description, image: imageLinks.smallThumbnail, link: infoLink }
          this.setState({
            books: [...this.state.books, responseData]
          })
        })
      })
      .catch(e => console.log(e))
  }


  saveBooks(data) {
    Axios.post('/api/books', data)
      .then(res => alert('Book Saved'))
      .catch(e => console.log(e))
  }

  renderBooks() {
    return (
      <div className='search'>
        {this.state.books.map((data, id) => (
          <div className='books' key={id} >
            <Paper>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase>
                    <img alt="complex" src={data.image} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        {data.title}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Description: {data.description}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        <a href={data.link}>More Info</a>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" style={{ cursor: 'pointer' }}>
                        <Button variant='contained' color='primary' onClick={() => this.saveBooks(data)}>Add to favorites</Button>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            {this.handleFavorites}
          </div>
        ))}
      </div>
    );
  }


  render() {
    return (
      <Container maxWidth='lg'>
        <div>
          {this.renderBooks()}
        </div>
      </Container>
    );
  }
}

export default BookSearch;