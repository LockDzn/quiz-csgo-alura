import { OPTIONS_SELECTED_UPDATE, OPTIONS_SELECTED_RESET } from '..';

export const optionsSelectedUpdate = (index) => ({
  type: OPTIONS_SELECTED_UPDATE,
  payload: index,
});

export const optionsSelectedReset = () => ({
    type: OPTIONS_SELECTED_RESET
});
  
