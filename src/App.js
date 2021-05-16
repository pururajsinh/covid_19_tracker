import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./data-fetcher/index.js";
import styles from "./App.module.css";
class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const retrivedData = await fetchData();
    this.setState({ data: retrivedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
    console.log(fetchedData);
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <h1> Covid-19 Tracker </h1>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
export default App;
