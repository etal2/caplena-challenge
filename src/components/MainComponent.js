import React, { Component } from 'react';
import { useHistory, Link, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import SentenceFeedbackComponent from './SentenceFeedbackComponent';
import ReviewSentencesComponent from './ReviewSentencesComponent';

import { addFeedback } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    sentences: state.sentences
  };
}

const mapDispatchToProps = dispatch => ({
  addFeedback: (senteceId, value) => dispatch(addFeedback(senteceId, value))
});


class Main extends Component {
  
  render() {

    const SentenceWithId = ({match}) => {
      var currentId = parseInt(match.params.senteceId,10)
      var current = this.props.sentences.sentences[currentId]
        return(
            <SentenceFeedbackComponent 
              text={current.text}
              sentiment={current.sentiment}
              currentId={currentId}  
              sentences={this.props.sentences.sentences}
              addFeedback={this.props.addFeedback}
            />)
    }

    return (
      <div className="container">
        <div className="header top-bar">
          <h1><Link to="/">Caplena Code Challenge</Link></h1>
          <div className="top-bar-right">
            <Link to="/review">View results</Link>
          </div>
        </div>
        <div className="main">
            <Switch location={this.props.location}>
                <Route path='/sentence/:senteceId' component={SentenceWithId} />
                <Route exact path='/review' component={() => <ReviewSentencesComponent sentences={this.props.sentences.sentences} />} />
                <Redirect to="/sentence/0" />
            </Switch>
        </div>
      </div>)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));