import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Ml from './images/Machine-learning.jpg';
import Avatar from './images/male-avatar.jpg';
import Calendar from './images/calendar.png';

function News(){
    return (
        <Grid container spacing={1}>
            <Grid item xs={3} className="newsimg">
                <img src={Ml} className="newsimgwh" />
            </Grid>
            <Grid item xs={9} className="newsdetail">
                <Grid item xs={12} className="newsgist">
                    <h2 className="newsHeading">Machine Learning is almost ruining our lives</h2>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={6} className="newsauthordetail">
                        <Grid container spacing={1}>
                            <Grid item xs={2} className="newsauthorimg">
                                <img src={Avatar} className="authorimg" />
                            </Grid>
                            <Grid item xs={10} className="newsauthorname">
                                <h4>Murphy</h4>
                            </Grid>
                        </Grid>     
                    </Grid>
                    <Grid item xs={6} className="newsdatedetail">
                        <Grid container spacing={1}>
                            <Grid item xs={2} className="newsdateicon">
                                <img src={Calendar} className="authorimg" />
                            </Grid>
                            <Grid item xs={10} className="newsdate">
                                <h4>Murphy</h4>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>      
            </Grid>
        </Grid>
    );
}

export default News;