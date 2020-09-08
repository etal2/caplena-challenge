import React, { Component } from 'react'
import { useHistory } from "react-router-dom"
import SentimentComponent from "./SentimentComponent"

function SentenceFeedbackComponent({text, currentId, sentiment, addFeedback, sentences }) {
    const history = useHistory()
    
    const addPositiveFeedback = (e) => {
        addFeedback(currentId, true)
        e.preventDefault()
        if(sentences.length > currentId + 1  ){
            history.push("/sentence/" + (currentId + 1))
        } else {
            history.push("/review")
        }
    }

    const addNegativeFeedback = (e) => {
        addFeedback(currentId, false)
        e.preventDefault()
        if(sentences.length > currentId + 1  ){
            history.push("/sentence/" + (currentId + 1))
        } else {
            history.push("/review")
        }
    }

    return(
      <div className="container">
          <div className="current-sentence">
              {text}
          </div>
          <div className="sentiment">
            Given sentiment: <SentimentComponent sentiment={sentiment} size={"6x"} />
          </div>
          <div className="feedback">
              <span className="text">How do you review this feedback?</span>
              <span className="buttons">
                <a href="#" className="button success" onClick={addPositiveFeedback}>Correct</a> or <a className="button alert" href="#" onClick={addNegativeFeedback}>Incorrect</a> 
            </span>
          </div>
      </div>
    );
}

export default SentenceFeedbackComponent;