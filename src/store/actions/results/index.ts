import { RESULTS_UPDATE } from '../';

export const resultsUpdate = (results) => ({
  type: RESULTS_UPDATE,
  payload: results,
});
