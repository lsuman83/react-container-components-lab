import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviews extends Component {
    
    constructor(){
        super()
        this.state = {
            searchTerm: '',
            reviews: []
        }

        this.handleSearch = this.handleSearch.bind(this)
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSearch = (event) => {
        event.preventDefault();
        fetch(URL + `&query=${this.state.searchTerm}`)
            .then(resp => resp.json())
            .then(reviewData => {
                const reviews = reviewData.results.map(review => {
                    return review })
                this.setState({reviews})
            })
        return(
            <MovieReviews reviewList={this.state.reviews} />
        )
    }

    render(){
        return(
            <form className='searchable-movie-reviews' onSubmit={this.handleSearch}>
                <input 
                    type='text'
                    name='searchTerm' 
                    id='searchTerm'
                    onChange={this.handleChange} 
                    value={this.state.searchTerm}
                    placeholder='search movie reviews'
                    />

                <input type='submit' value='Search'/>

            </form>
        )
    }
}