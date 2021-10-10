import React,{ useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis } from 'recharts';

const buildChartData = (data, casesType) => {
    let chartData =[];
    let lastDataPoint;
    for(let date in data.cases){
        if(lastDataPoint){
            let newDataPoint={
                x: date,
                y: data[casesType][date] - lastDataPoint,
            };
            chartData.push(newDataPoint);
        }
        lastDataPoint = data[casesType][date];
    }
    return chartData;
}

function LineRechart({ casesType }) {
    const [data, setData] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let chartData = buildChartData(data, casesType);
                setData(chartData);
                // console.log(chartData)
            });
        };
        fetchData();
    }, [casesType]);
    console.log(data)
    return (
        <LineChart height="300px" width="1000px" data={data}>
            <Line dataKey="y" type="monotone" stroke="#8884d8"/>
            <XAxis dataKey='cases'/>
            <YAxis/>
        </LineChart>
    )
}

export default LineRechart
