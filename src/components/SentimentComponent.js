import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import { faFrown } from '@fortawesome/free-solid-svg-icons'
import { faMeh } from '@fortawesome/free-solid-svg-icons'

const SentimentComponent = ({sentiment, size = "6x"}) => {
    if(sentiment === true){
        return (<div className="positive">
                    <FontAwesomeIcon icon={faSmile} size={size}/>
                    <span className="text">Positive</span>
                </div>)
    } else if(sentiment === false){
        return (<div className="negative">
                <FontAwesomeIcon icon={faFrown} size={size}/>
                <span className="text">Negative</span>
            </div>)
    } else return (<div className="neutral">
            <FontAwesomeIcon icon={faMeh} size={size}/>
            <span className="text">Neutral</span>
        </div>)
}

export default SentimentComponent