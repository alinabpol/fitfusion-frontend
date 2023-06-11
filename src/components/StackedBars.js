import { VictoryChart, VictoryLabel, VictoryStack, VictoryAxis, VictoryBar } from 'victory'
import { useState } from 'react';
import "../styling/Analytics.css"

const StackedBars = ({activityData, setActivityData}) => {

  
  const width = 400;
  const height = 400;
  
  const sumAllNumsInY = activityData.reduce((total, index) => total + index.y, 0);
  
  // convert each y value to a percentage
  const dataB = activityData.map((index) => ({
    x: index.x,
    y: (index.y / sumAllNumsInY) * 100
  }));

  const dataA = dataB

      return (
        <VictoryChart horizontal
          height={height}
          width={width}
          padding={40}
        >
          <VictoryStack
            style={{ data: { width: 25 }, labels: { fontSize: 13, fill: "white" } }}
          >
            <VictoryBar
              style={{ data: { fill: "tomato" } }}
              data={dataA}
              y={(data) => (-Math.abs(data.y))}
              labels={({ datum }) => (`${Math.floor(datum.y)}%`)}
            />
            <VictoryBar
              style={{ data: { fill: "orange" } }}
              data={dataB}
              labels={({ datum }) => (`${Math.floor(datum.y)}%`)}
            />
          </VictoryStack>
  
          <VictoryAxis
            style={{
              axis: { stroke: "transparent" },
              ticks: { stroke: "transparent" },
              tickLabels: { fontSize: 15, fill: "black" }
            }}
            tickLabelComponent={
              <VictoryLabel
                x={width / 2}
                textAnchor="middle"
              />
            }
            tickValues={activityData.map((point) => point.x).reverse()}
          />
        </VictoryChart>
      );
    }
  

export default StackedBars;