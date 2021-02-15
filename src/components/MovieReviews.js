// Code MovieReviews Here
import React, { Component } from 'react'



function MovieReviews ({reviewList}){
    return(
       <ul className='review-list'>
            {reviewList.map(review => 
                <li className='review'>
                    <h1>{review.display_title}'s Review</h1>
                    <h3><em>{review.summary_short}</em></h3>
                </li>
            )}
        </ul> 
    )}



export default MovieReviews