import axios from "axios";

const url = `https://covid19.mathdro.id/api`;
export const fetchData = async () => {
  try {
    const { data } = await axios.get(url);
    const essentials = {
      confirmed: data.confirmed,
      deaths: data.deaths,
      recovered: data.recovered,
      lastUpdate: data.lastUpdate,
    };
    return essentials;
  } catch (error) {
    console.log(error);
  }
};

export const fetchLatestData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const essentials = data.map((updated) => ({
      confirmed: updated.confirmed.total,
      deaths: updated.deaths.total,
      lastUpdate: updated.reportDate,
    }));
    return essentials;
  } catch (error) {
    console.log(error);
  }
};
