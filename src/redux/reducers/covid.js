import {UPDATE_COVID_INFO, UPDATE_COVID_NEWS, FETCH_COVID_NEWS} from '../actions/actionsType';

const initCovid = {
  loadingNews: true,
  info: [
    {
      style: {
        backgroundColor: '#FDE8E9',
        NumberColor: '#ED1C24',
        numberTodayColor: '#9C2727',
      },
      title: 'Số ca nhiễm',
    },
    {
      style: {
        backgroundColor: '#E9F6EC',
        NumberColor: '#28A76A',
        numberTodayColor: '#105E38',
      },
      title: 'Hồi phục',
    },
    {
      style: {
        backgroundColor: '#B7B6BB',
        NumberColor: '#ED1C24',
        numberTodayColor: '#765C1B',
      },
      title: 'Tử vong',
    },
  ],
};

const covid = (state = initCovid, action) => {
  switch (action.type) {
    case UPDATE_COVID_INFO:
      const dataInfo = action.data;
      state.updatedInfo = dataInfo.updated;
      state.info[0].number = dataInfo.cases;
      state.info[0].todayNumber = dataInfo.todayCases;
      state.info[1].number = dataInfo.recovered;
      state.info[1].todayNumber = dataInfo.todayRecovered;
      state.info[2].number = dataInfo.deaths;
      state.info[2].todayNumber = dataInfo.todayDeaths;

      return {...state};
    case FETCH_COVID_NEWS:
      return {...state, loadingNews: true};
    case UPDATE_COVID_NEWS:
      return {...state, loadingNews: false, ...action.data};
    default:
      return state;
  }
};

export default covid;
