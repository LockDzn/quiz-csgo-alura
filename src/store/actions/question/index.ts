import { QUESTION_UPDATE } from '..';

export const questionUpdate = (question) => ({
  type: QUESTION_UPDATE,
  payload: question,
});
