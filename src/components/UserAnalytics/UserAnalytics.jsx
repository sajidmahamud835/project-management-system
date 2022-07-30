import { Grid } from '@mui/material';
import React from 'react';
import EarningssChart from '../EarningsChart/EarningsChart';
const data = [
    {
        name: "January",
        Earnings: 2400,

    },
    {
        name: "February",
        Earnings: 1398,
    }
    ,
    {
        name: "March",
        Earnings: 9800,
    }
    ,
    {
        name: "April",
        Earnings: 3908,
    }
    ,
    {
        name: "May",
        Earnings: 4800,
    }
    ,
    {
        name: "June",
        Earnings: 3800,
    }
    ,
    {
        name: "July",
        Earnings: 4300,
    }
    ,
    {
        name: "August",
        Earnings: 4300,
    }
    ,
    {
        name: "September",
        Earnings: 4300,
    }
    ,
    {
        name: "October",
        Earnings: 4300,
    }
    ,
    {
        name: "November",
        Earnings: 4300,
    }
    ,
    {
        name: "December",
        Earnings: 4300,
    }
];
const UserAnalytics = () => {
    return (
        <div>
            {/* use mui to devide the page into two grid */}
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <EarningssChart data={data} />
                </Grid>
                <Grid item xs={6}>
                    <EarningssChart data={data} />
                </Grid>
            </Grid>
        </div>
    );
};

export default UserAnalytics;