import React, { Component } from 'react';
import axios from '../../axios';
import {Grid, Navbar, Badge,Label} from 'react-bootstrap';
import {AppBar} from 'material-ui';
import CardListComponent from '../../components/card-list/card-list-component';
import Nav from '../../components/nav/nav-component';
import './Flix.css';
import ScrollHelper from '../../helpers/InfiniteScroll';
import createMovieLink from '../../helpers/createMovieLink';
import handleResponse from '../../helpers/responseHandler';

class Flix extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            currentPage:1,
            error: false,
            isLoading:false
        };
        this.handleScroll = this.handleScroll.bind(this);
      }

    componentDidMount () {
        window.onscroll = this.handleScroll;
        this.getMoviesList(this.state.currentPage);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }

    handleScroll() {
        if (!this.state.isLoading) {
          let percentageScrolled = ScrollHelper(window);
          if (percentageScrolled > .8) {
            const nextPage = this.state.currentPage + 1;
            this.getMoviesList(nextPage,this.state.movies);
            this.setState({currentPage: nextPage});
          }
        }
      }

    getMoviesList(currentPage, currentMovies=[]){
        //this.setState({isLoading:true});
        axios.get(createMovieLink({page:currentPage})).then( response => {
                this.setState({movies: currentMovies.concat(handleResponse(response)), isLoading:false});
            } )
            .catch(error => {
                this.setState({error: true, isLoading:false});
            });
    }

    render () {
        let moviesList = <div><center>Something went wrong!</center></div>;
        if (!this.state.error) {
            moviesList = 
            <div>
               <Nav/>
            <Grid>
                <CardListComponent movies={this.state.movies} isLoading={this.state.isLoading} />
            </Grid>
          </div>
        }
        return (
            moviesList
        );
    }
}

export default Flix;
