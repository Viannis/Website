import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Vue from './images/vue.png';
import Framereact from './images/react.jpeg';
import Reactnative from './images/react-native.png';
import Ml from './images/Machine-learning.jpg';
import Node from './images/nodejs_logo.jpg';
import Iot from './images/Internet-of-Things.png';
import Flutter from './images/flutter.png';
import Django from './images/django.png';

function Do(){
    return(
        <div className="blogdo">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div className="dohead">
                        <h1>What we do?</h1>
                    </div>
                    <div className="dobody">
                        <p>We learn, discover and explore across all technology stacks</p>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="scrollyouter">
                        <div className="scrollyinner">
                            <div className="scrollycontent">
                                <img src={Vue} className="imgwh img-thumbnail" />
                                <img src={Reactnative} className="imgwh img-thumbnail" />
                                <img src={Framereact} className="imgwh img-thumbnail" />
                                <img src={Flutter} className="imgwh img-thumbnail" />
                                <img src={Ml} className="imgwh img-thumbnail" />
                                <img src={Node} className="imgwh img-thumbnail" />
                                <img src={Iot} className="imgwh img-thumbnail" />
                                <img src={Django} className="imgwh img-thumbnail" />
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </Grid>
                
            </Grid>
        </div>
    );
}

export default Do;
