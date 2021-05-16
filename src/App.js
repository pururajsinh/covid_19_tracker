import React from "react";
import { Card, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Card />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}
export default App;
