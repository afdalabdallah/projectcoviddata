import React,{useState, useEffect} from 'react'
import { Line } from "react-chartjs-2";
import numeral from 'numeral';

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 1.7,
    },
  },
  // maintainAspectRatio: false,
  tooltips: {
    mode: 'index',
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    x: [
      {
        type: "time",
        time: {
          format: "DD/MM/YY",
          tooltipFormat: "ll",
        },
        gridLines: {
          display: false
        }
      },
    ],
    y: [
      {
        gridLines: {
          display: true,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

const buildChartData = (data, casesType) => {
    let chartData =[];
    let lastDataPoint;
    for(let date in data[casesType]){
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

function LineGraph({ casesType, deathCases, recCases }) {
    const [data, setData] = useState({})
    const [deathData, setDeath] = useState({})
    const [recData, setRec] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let chartData = buildChartData(data, casesType);
                let chartDeath = buildChartData(data, deathCases);
                let chartRecov = buildChartData(data, recCases)
                setDeath(chartDeath)
                setData(chartData);
                setRec(chartRecov);
                //console.log(chartData)
            })
            ;
        };
        fetchData();
    }, []);

    return (
        <div>
            {data?.length > 0 && (
            <Line 
            height="300px"
            width="1000px"
            data={{
                datasets: [
                {
                    backgroundColor: "rgba(204, 16, 52, 0.5)",
                    borderColor: "#CC1034",
                    data: data,
                    label: "Total kasus",
                    gridLines: false,
                },
                {
                  data: deathData,
                  borderColor:"black",
                  label: "deaths",
                  backgroundColor: "black",
                },
                {
                  data: deathData,
                  borderColor:"blue",
                  label: "recovered",
                  backgroundColor: "blue",
                }
                
                ],
                
            }}
            options={options}
            />
            
            )}
            
        </div>
    )
}

export default LineGraph
