import React from 'react';
import {Area, AreaChart, linearGradient,XAxis,YAxis,CartesianGrid,CartesianAxis,Tooltip,ResponsiveContainer} from 'recharts';

import StyledCustomAreaChart, {StyledDataView} from '../styled/StyledCustomAreaChart';
import moment from 'moment';
import theme from '../constants/theme';

const DataView = ({active, payload, label})=>{
    const {date,data} = active ? payload[0].payload : {data: Date.now, data:0};
    return (
        active ? 
        <StyledDataView>
            <div className = "Header">
                <img src="https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/ng.png" alt=""/>
            </div>
            <div className = "Content">
                <p>New Cases on <span>{moment(date).format('MMMM Do, YYYY')}</span> {moment(date).isBefore(moment(),'day')? 'was':'is'} <span>{data}</span></p>
            </div>
        </StyledDataView>:
        null
    );
}

const DataViewDeath = ({active, payload, label})=>{
    const {date,data} = active ? payload[0].payload : {data: Date.now, data:0};
    return (
        active ? 
        <StyledDataView>
            <div className = "Header">
                <img src="https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/ng.png" alt=""/>
            </div>
            <div className = "Content">
                <p>Total Deaths as at <span>{moment(date).format('MMMM Do, YYYY')}</span> {moment(date).isBefore(moment(),'day')? 'was':'is'} <span>{data}</span></p>
            </div>
        </StyledDataView>:
        null
    );
}

const CustomAreaChart = ({data,cases = false})=>{
    const colorStop = theme.lnGrad2;
    return(
        <StyledCustomAreaChart>
            <ResponsiveContainer width = "100%" height = "100%">
            <AreaChart width={730} height={250} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={`${colorStop}`} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={`${colorStop}`} stopOpacity={0}/>
                </linearGradient>
            </defs>
            <YAxis stroke = "#95A4BE" tickLine = {{fill: "#95A4BE"}} tick = {{fontSize: 12,fill:"#95A4BE"}} />

            <CartesianGrid stroke="#304057" vertical = {false} strokeDasharray="3 3" />
            
            <Tooltip active = {true} content = {cases ? DataView:DataViewDeath}/>
            <Area type="monotone" dataKey="data" stroke={colorStop} fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
            </ResponsiveContainer>
        </StyledCustomAreaChart>
    );
}

export default CustomAreaChart;