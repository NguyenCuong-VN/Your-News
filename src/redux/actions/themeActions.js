import {SWITCH_THEME} from '../../constants/actionsType';

export const switchTheme = theme => {
  return (dispatch) => {
    dispatch({
      type: SWITCH_THEME,
      theme: theme,
    });
  };
};