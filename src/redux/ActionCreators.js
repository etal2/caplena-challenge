import * as ActionTypes from './ActionTypes';

export const addFeedback = (sentenceId, feedback) => ({
    type: ActionTypes.ADD_SENTENCE_FEEDBACK,
    payload: { 
        sentenceId: sentenceId,
        feedback: feedback
    }
});