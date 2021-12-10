import React,{useState, useEffect} from 'react'
import { Line } from "react-chartjs-2";
import numeral from 'numeral';

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0.5,
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
    // let chartData =[];
    // let lastDataPoint;
    // for(let date in data[casesType]){
    //     if(lastDataPoint){
    //         let newDataPoint={
    //             x: date,
    //             y: data[casesType][date] - lastDataPoint,
    //         };
    //         chartData.push(newDataPoint);
    //     }
    //     lastDataPoint = data[casesType][date];
    // }
    // return chartData;
    let chartData =[];
    // data.map((dataHarian)=>{     
    //   let newDataPoint = {
    //       x: dataHarian.tanggal.toString().slice(0,10),
    //       y: dataHarian[casesType]
          
    //   }
    //   console.log(newDataPoint["x"])
    //   chartData.push(newDataPoint)
      
    // })
    for(let i = data.length-365;i < data.length ;i ++){
      let newDataPoint = {
         x: data[i].tanggal.toString().slice(0,10),
         y: data[i][casesType]
      }
      chartData.push(newDataPoint)
    }
    
    return chartData;
}

function LineGraph({ casesType, deathCases, recCases }) {
    const [posData, setPos] = useState({})
    const [deathData, setDeath] = useState({})
    const [recData, setRec] = useState({})
    var cek = false;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://apicovid19indonesia-v2.vercel.app/api/indonesia/harian")
            const data = await response.json();
            // console.log(data);     
            setDeath(buildChartData(data, "meninggal"));
            setRec(buildChartData(data, "sembuh"));
            setPos(buildChartData(data, "positif")); 
            cek = true;
        };
        fetchData();
    }, []);
  
    return (
        <div>
            {posData?.length > 0 && (
            <Line 
            
            data={{
                datasets: [
                {
                    backgroundColor: "rgba(204, 16, 52, 0.5)",
                    borderColor: "#CC1034",
                    data: posData,
                    label: "Total kasus",
                    gridLines: false,
                    lineTension: 0.4
                },
                {
                  data: deathData,
                  borderColor:"black",
                  label: "Meninggal",
                  backgroundColor: "black",
                  gridLines: false,
                  lineTension: 0.4
                },
                {
                  data: recData,
                  borderColor:"blue",
                  label: "Sembuh",
                  backgroundColor: "blue",
                  gridLines: false,
                  lineTension: 0.4
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
