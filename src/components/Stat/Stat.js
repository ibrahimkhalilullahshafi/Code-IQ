import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom';
// import './Stat.css'


const Stat = () => {
    const { data } = useLoaderData();
    const chartData = data;

    return (
        <div> <ResponsiveContainer width="95%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={chartData}
                margin={{
                    top: 50,
                    right: 50,
                    left: 50,
                    bottom: 50,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line dataKey="total" fill="#8884d8" />
            </LineChart>
        </ResponsiveContainer></div>
    );
};

export default Stat;