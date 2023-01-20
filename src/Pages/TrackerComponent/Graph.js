import React from "react";
import Chart from 'chart.js/auto' 
import {Line} from 'react-chartjs-2'
import '../../App.css'
const LineGraph=(props)=>{

    return(
    <div className='graph'>
        <Line data={{
            labels: props.day,
            datasets: [{
                label: 'Below 2.5 μm Particulate Matter Forecasting',
                backgroundColor:'rgba(111, 167, 252, 0.808)',
                data: props.airPollution,
                
            }]
        }}/>
    </div>
    )
}
export default LineGraph