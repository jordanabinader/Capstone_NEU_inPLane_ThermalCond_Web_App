'use client';
import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";

const TestGraph = () => {
    const heightGraph = 350;
    const widthGraph = 700;
    const [dataStream, setDataStream] = useState([{ x: 0, y: 0 }]);
    const [series, setSeries] = useState([
        {
            name: 'Temperature at Point 1',
            data: []
        },
        {
            name: 'Temperature at Point 2',
            data: []
        }
    ]);

    const options = {
        chart: {
            id: 'realtime',
            height: heightGraph,
            width: widthGraph,
            type: 'line',
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                }
            },
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: 'Real-Time Temperature Data',
            align: 'left'
        },
        markers: {
            size: 0
        },
        xaxis: {
            type: 'datetime',
            range: 1000 * 1000 // 1000 seconds
        },
        yaxis: {
            max: 100
        },
        legend: {
            show: true
        },
    };

    async function appendData(dataPoint) {
        var prev = dataStream[dataStream.length - 1];
        var newStream = [...dataStream, { x: prev['x'] + 3, y: dataPoint }];

        // Limit the length of dataStream to 1000 data points
        if (newStream.length > 1000) {
            newStream.shift();
        }

        setDataStream(newStream);
    }

    useEffect(() => {
        // Update the series data 
        setSeries([
            { name: 'Temperature at Point 1', data: dataStream },
            { name: 'Temperature at Point 2', data: dataStream } // Update this as per your logic
        ]);

        // Implement WebSocket or data fetching logic 

        return () => {
            // Clean-up logic for WebSocket or data fetching
        };
    }, [dataStream]);

    const handleChange = () => {
        // Stop test functionality
        console.log('Stop test')
    }

    return (
        <div>
            <div className='border-b border-gray-200 rounded-md '>
                <Chart series={series} options={options} height={heightGraph} width={widthGraph} />
            </div>
            <div className="flex justify-center mt-6"> 
                <button 
                    className="rounded-md bg-red-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" 
                    aria-current="page" 
                    type="button" 
                    onClick={handleChange}
                >
                    Stop Test
                </button>
            </div>
        </div>

    );
};

export default TestGraph;
