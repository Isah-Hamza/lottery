import React, { PureComponent, useLayoutEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        uv: 40,
        pv: 24,
        amt: 24,
    },
    {
        name: 'Feb',
        uv: 30,
        pv: 13,
        amt: 22,
    },
    {
        name: 'Mar',
        uv: 23,
        pv: 98,
        amt: 22,
    },
    {
        name: 'Apr',
        uv: 34,
        pv: 39,
        amt: 20,
    },
    {
        name: 'May',
        uv: 18,
        pv: 48,
        amt: 21,
    },
    {
        name: 'Jun',
        uv: 23,
        pv: 38,
        amt: 25,
    },
    {
        name: 'July',
        uv: 34,
        pv: 43,
        amt: 21,
    },
    {
        name: 'May',
        uv: 18,
        pv: 48,
        amt: 21,
    },
    {
        name: 'Jun',
        uv: 23,
        pv: 38,
        amt: 25,
    },
    // {
    //     name: 'July',
    //     uv: 34,
    //     pv: 43,
    //     amt: 21,
    // },
    // {
    //     name: 'May',
    //     uv: 18,
    //     pv: 48,
    //     amt: 21,
    // },
    // {
    //     name: 'Jun',
    //     uv: 23,
    //     pv: 38,
    //     amt: 25,
    // },

];

const CustomLineChart = ({ height }) => {

    // render() {
    const [width, setWidth] = useState(300);

    useLayoutEffect(() => {
        const chart_parent = document.querySelector('.chart-parent');
        console.log(chart_parent.clientWidth);
        setWidth(chart_parent.clientWidth)
    },[window.innerWidth])

    return (
        // <ResponsiveContainer width={630} height={250}>
        <ResponsiveContainer width={width} minHeight={height ?? 250} >
            <LineChart
                width={'100%'}
                height={'100%'}
                data={data}
                margin={{
                    top: 15,
                    right: 30,
                    left: 20,
                    bottom: 15,
                }}

            >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis axisLine={{ display: 'none' }} tick={{ fontSize: 12, fontWeight: 700 }} dataKey="name" />
                <YAxis axisLine={{ display: 'none' }} tick={{ fontSize: 12, fontWeight: 700 }} />
                <Tooltip />
                {/* <Legend /> */}
                <Line strokeWidth={2} dot={false} type="monotone" dataKey="pv" stroke="#5F891C" />
                <Line strokeWidth={2} dot={false} type="monotone" dataKey="uv" stroke="#E5951A" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default CustomLineChart
// }
