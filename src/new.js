import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import News from './news.js';
import Chip from '@material-ui/core/Chip';

function New() {
    return(
        <div className="blogdo">
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Grid item xs={12} className="newsTitle">
                        <h1>Latest News</h1>
                    </Grid>
                    <div className="newsouter">
                        <div className="newsinner">
                            <div className="newscontent">
                                <News />
                                <News />
                                <News />
                                <News />
                                <News />
                                <News />
                            </div>
                        </div>
                    </div>    
                </Grid>
                <Grid item xs={4}>
                    <Grid item xs={12} className="archiveTitle">
                        <h1>Archives</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <Chip label="news link" className="chip" component="a" href="#" clickable />
                        <Chip label="news link" className="chip" component="a" href="#" clickable />
                        <Chip label="news link" className="chip" component="a" href="#" clickable />
                        <Chip label="news link" className="chip" component="a" href="#" clickable />
                        <Chip label="news link" className="chip" component="a" href="#" clickable />
                        <Chip label="news link" className="chip" component="a" href="#" clickable />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default New;