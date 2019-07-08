import React, { Component } from 'react';
import Axios from 'axios';
import Navbar from '../../Navbar/Navbar'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import './style.css'


class Saved extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    this.handleSaved()
  }

  handleSaved() {
    Axios.get('/api/books')
      .then(({ data: books }) => {
        console.log(books)
        this.setState({
          books
        })
        console.log(this.state.books)
      })
      .catch(e => console.log(e))
  }


  handleDeleteSaved(id) {
    Axios.delete(`/api/books/${id}`)
      .then(res => alert('Book Removed!'))
      .then(res => this.handleSaved())
      .catch(e => console.log(e))
  }

  render() {
    return (
      <div>
        <Navbar />
        <div>
          {this.state.books.map((data, id) => (
            <div className='saved' key={id} >
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
                          <Link href={data.link}>More Info</Link>
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" style={{ cursor: 'pointer' }}>
                          <Button variant='contained' color='primary' onClick={() => this.handleDeleteSaved(data._id)}>Delete</Button>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Saved;