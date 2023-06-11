import { VictoryChart, VictoryLine, VictoryScatter} from 'victory'
import { useEffect } from 'react';

function SleepChart({sleepData, setSleepData}) {

  const chartLine = sleepData.map(({ day, hours }) => ({ x: day, y: hours }))

  useEffect(() => {
    console.log("sleep data now:", sleepData)
    console.log(" data :", chartLine)
    // eslint-disable-next-line
  }, [sleepData]);



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