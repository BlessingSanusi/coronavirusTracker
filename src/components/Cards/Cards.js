import React from 'react';

import { Card, CardContent, Typography, Grid } from '@material-ui/core'

import Countup from 'react-countup'
import cx from 'classnames'
import styles from './Cards.module.css';

const Cards = ( {data: { confirmed, recovered, deaths, lastUpdate}}) => {

    // console.log(confirmed)
if(!confirmed){
    return 'Loading...'
}
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">

                <Grid item component ={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                <CardContent>
                   <Typography variant="h6" gutterBottom>Infected</Typography>
                </CardContent>
    <Typography variant="h5">
        <Countup 
        start={0}
        end={confirmed.value}
        duration={2.5}
        separator="," />
        </Typography>
    <Typography color="textSecondary">{ new Date(lastUpdate).toDateString()}</Typography>
                </Grid>

                <Grid item component ={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                <Typography variant="h6" gutterBottom>Recovered</Typography>
                </CardContent>
                <Typography variant="h5">
                <Countup 
        start={0}
        end={recovered.value}
        duration={2.5}
        separator="," /></Typography>
                <Typography color="textSecondary">{ new Date(lastUpdate).toDateString()}</Typography>
                </Grid>

                <Grid item component ={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                <CardContent>
                <Typography variant="h6" gutterBottom>Deaths</Typography>
                </CardContent>
                <Typography variant="h5">
                <Countup 
        start={0}
        end={deaths.value}
        duration={2.5}
        separator="," />
                </Typography>
                <Typography color="white">{ new Date(lastUpdate).toDateString()}</Typography>
                </Grid>


            </Grid>
        </div>
    )
}

export default Cards;