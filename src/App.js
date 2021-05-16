import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./data-fetcher/index.js";
import styles from "./App.module.css";
class App extends React.Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const retrivedData = await fetchData();
    this.setState({ data: retrivedData });
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}
export default App;
