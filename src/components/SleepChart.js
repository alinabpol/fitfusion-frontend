import { VictoryChart, VictoryLine, VictoryScatter} from 'victory'


function SleepChart() {

  const data = [
    { day: 'Mon', hours: 7 },
    { day: 'Tue', hours: 6 },
    { day: 'Wed', hours: 8 },
    { day: 'Thur', hours: 7.5 },
    { day: 'Fri', hours: 6.5 },
    { day: 'Sat', hours: 9 },
    { day: 'Sun', hours: 8.5 }
  ];

  const chartLine = data.map(({ day, hours }) => ({ x: day, y: hours }))

  const victoryChartStyle = {
    axis: {
      style: {
        axis: { stroke: 'white' },
        tickLabels: { fill: 'white' },
        grid: { stroke: 'none' },
      },
    },
  };
  

  return (
    <div className="sleep-chart">
      <VictoryChart height={390} theme={victoryChartStyle}>
        <VictoryLine
          data={chartLine}
          style={{ data: { stroke: '#FF5252' } }}
        />
        <VictoryScatter
          data={chartLine}
          size={5}
          style={{ data: { fill: 'red' } }}
        />
      </VictoryChart>
    </div>
  );
}

export default SleepChart