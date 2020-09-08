import * as ActionTypes from './ActionTypes';
import { SentencesData } from './sentencesData';

export const Sentences = (state = { current: 1, sentences:SentencesData }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_SENTENCE_FEEDBACK:
      var newsentences = state.sentences
      newsentences[action.payload.sentenceId].review = action.payload.feedback
      return {...state,
        current: state.current + 1,
        sentences:  newsentences }
    default:
      return state;
  }
};