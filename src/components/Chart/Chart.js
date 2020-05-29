import React, {useState, useEffect} from 'react';
import { dailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2'

import styles from './Chart.module.css'

const Chart = () => {
    const [everydayData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
           const initialData = await dailyData();

           setDailyData(initialData);
        };

        // console.log(everydayData)

        fetchData()
    });

    const lineChart = (
        everydayData.length
        ? (<Line 
        data={{
            labels: everydayData.map(({ date }) => date ),
            datasets: [{
                data: everydayData.map(({confirmed}) => confirmed),
                label: 'Infected',
                borderColor: 'orange',
                fill: true,
            },{
                data: everydayData.map(({deaths}) => deaths),
                label: 'Deaths',
                borderColor: 'red',
                fill: true,
            }],
        }}
        />) : null 
    ); 

    return (
       <div className={styles.container}>
{lineChart}
       </div>
    )
}

export default Chart;