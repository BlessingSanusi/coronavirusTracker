import React from 'react';

import { Cards, Chart, CountrySelector} from './components';

import styles from './App.module.css';

import {fetchData} from './api'


class App extends React.Component{
state={
  data : {}
}

async componentDidMount(){

  const coronaData = await fetchData();

  this.setState ( {data: coronaData})

}

handleChange = async (country) =>{
  const data = await fetchData(country);

  this.setState ( {data, country:country});
}

  render() {
    const { data, country } = this.state
    return (
      <div className={styles.container}>
        <h1> REAL-TIME COVID-19 TRACKER APP</h1>
      <Cards data={data} />
      <CountrySelector handleChange={this.handleChange} />
      <Chart data={data} country={country} />
      </div>
    );
  } 
  
}

export default App;
