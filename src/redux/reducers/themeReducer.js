import {lightTheme} from '../../assets/theme';
import {SWITCH_THEME} from '../actions/actionsType';

const initState = {
  theme: lightTheme,
};

const themeReducer = (state = initState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return {...state, theme: action.theme};
    default:
      return {...state};
  }
};

export default themeReducer;
