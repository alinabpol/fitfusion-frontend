import { VictoryChart, VictoryArea, VictoryAxis } from 'victory'
import { useEffect } from 'react';
import "../styling/Analytics.css"

const WeightChart = ({weightData, setWeightData}) => {

  useEffect(() => {
    console.log("weightdata now:", weightData)

  }, [weightData]);

  return (
    <div className="weight-chart">
    <VictoryChart width={400} height={400}>
      <VictoryArea
        data={weightData}
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