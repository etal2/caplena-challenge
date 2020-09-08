import React, { Component } from 'react';
import SentimentComponent from "./SentimentComponent"

const Review = ({review}) => {
  if(review === true){
    return (<span className="correct">Correct</span>)
  } else if(review === false){
    return (<span className="incorrect">Incorrect</span>)
  } else {
    return (<span className="unreviewed">-</span>)
  }
}

const SentencesTable = ({sentences}) => {
    var i = 0;
    return(
      sentences.map((sen) => {
        i++;
        return (
            <div key={i} className="grid-x grid-padding-y grid-padding-x">
                <span className="text cell medium-6">{sen.text}</span>
                <span className="sent cell medium-3"><SentimentComponent sentiment={sen.sentiment} size={"lg"} /></span>
                <span className="rev cell medium-3">Review: <Review review={sen.review}/></span>
            </div>
        )
      })
    )
}

function ReviewSentencesComponent({sentences}) {
  return (<div className="reviews grid-container">
      <h2>Review results</h2>
      <div className="">
        <SentencesTable sentences={sentences} />
      </div>
    </div>)
}

export default ReviewSentencesComponent;