export const formatCovidInfo = data => {
  const result = {};

  const date = new Date(data.updated * 1000);
  result.updated = date.toString();
  result.cases = data.cases;
  result.todayCases = data.todayCases;
  result.deaths = data.deaths;
  result.todayDeaths = data.todayDeaths;
  result.recovered = data.recovered;
  result.todayRecovered = data.todayRecovered;

  return result;
};

