import axios from "axios";

const url = `https://covid19.mathdro.id/api`;
export const fetchData = async (country) => {
  let changedUrl = url;
  if (country) {
    changedUrl = `${url}/countries/${country}`;
  }
  try {
    const { data } = await axios.get(changedUrl);
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

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
