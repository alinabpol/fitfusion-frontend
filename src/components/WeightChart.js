import { VictoryChart, VictoryLine, VictoryScatter } from 'victory'
import { useState } from 'react';
import "../styling/Analytics.css"


const WeightChart = () => {

const [interpolation, setInterpolation] = useState('linear');
const [polar, setPolar] = useState(false);
  

const data = [
    { month: 'Jan', weight: 150 },
    { month: 'Feb', weight: 148 },
    { month: 'Mar', weight: 145 },
    { month: 'Apr', weight: 142 },
    { month: 'May', weight: 140 },
    { month: 'Jun', weight: 138 },

  ]
  const InterpolationSelect = ({ currentValue, values, onChange }) => (
    <select onChange={onChange} value={currentValue} style={{ width: 75 }}>
      {values.map(
        (value) => <option value={value} key={value}>{value}</option>
      )}
    </select>
  );

return (
    <div>
      <InterpolationSelect
        currentValue={interpolation}
        onChange={(event) => setInterpolation(event.target.value)}
      />
      <input
        type="checkbox"
        id="polar"
        value={polar}
        onChange={(event) => {
          setPolar(event.target.checked);
          setInterpolation('linear');
        }}
        style={{ marginLeft: 25, marginRight: 5 }}
      />
      <label htmlFor="polar">polar</label>
      <VictoryChart polar={polar} height={390}>
  <VictoryLine
    interpolation={interpolation}
    data={data}
    x="month" 
    y="weight" 
    style={{ data: { stroke: '#c43a31' } }}
  />
  <VictoryScatter
    data={data}
    x="month" 
    y="weight" 
    size={5}
    style={{ data: { fill: '#c43a31' } }}
  />
</VictoryChart>
    </div>
  );
}


export default WeightChart