import { VictoryChart, VictoryArea, VictoryAxis } from 'victory'

import "../styling/Analytics.css"


const WeightChart = () => {
  const data = [
    { x: 'Jan', y: 150 },
    { x: 'Feb', y: 148 },
    { x: 'Mar', y: 120 },
    { x: 'Apr', y: 110 },
    { x: 'May', y: 110 },
    { x: 'Jun', y: null },
    { x: 'Jul', y: null },
    { x: 'Aug', y: null },
    { x: 'Sept', y: null },
    { x: 'Oct', y: null },
    { x: 'Nov', y: null },
    { x: 'Dec', y: null },
   
  ];

  return (
    <div className="weight-chart">
    <VictoryChart width={400} height={400}>
      <VictoryArea
        data={data}
        style={{ data: { fill: 'lightblue', stroke: 'teal' } }}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={(tick) => `${tick} lbs`}
        style={{
          axisLabel: { padding: 30, fill: 'white' },
          tickLabels: { fill: 'white' },
          grid: { stroke: 'grey' },
        }}
        domain={[80, 200]}
      />
      <VictoryAxis
        tickFormat={(x) => x.toLocaleString('default', { month: 'short' })}
        style={{
          axisLabel: { padding: 40, fill: 'white' },
          tickLabels: { fill: 'white' },
          grid: { stroke: 'grey' },
          
        }}
      />
    </VictoryChart>
    </div>
  );
}



export default WeightChart