import { VictoryChart, VictoryVoronoiContainer, VictoryLabel, VictoryStack, VictoryHistogram, VictoryAxis } from 'victory'
import _ from 'lodash';
import { useState } from 'react';
import "../styling/Analytics.css"

const StackedHistogram = () => {
    const [workoutData, setWorkoutData] = useState([
        { activity: "Test1", day: new Date(2020, 8, 1), count: 10 },
        { activity: "Test1", day: new Date(2020, 7, 1), count: 15 },
        { activity: "Test2", day: new Date(2020, 5, 2), count: 1 },
        { activity: "Test3", day: new Date(2020, 4, 3), count: 1 },
        { activity: "Test6", day: new Date(2020, 10, 4), count: 5 },
        { activity: "Test3", day: new Date(2020, 3, 2), count: 2 },
        { activity: "3", day: new Date(2020, 2, 2), count: 7 },
       
      ]);

    const groupedData = _.groupBy(workoutData, ({ activity }) => activity);

    const sharedAxisStyles = {
      tickLabels: {
        fontSize: 13,
        fill: "white"
      },
      axisLabel: {
        padding: 39,
        fontSize: 13,
        fontStyle: "italic",
        fill: "white"
      }
    };
  
    return (
      <div className="StackedHistogram">
        <VictoryChart
          height={450}
          scale={{ x: "time" }}
          containerComponent={
            <VictoryVoronoiContainer
              labels={({ datum }) =>
                datum.y > 0 ? `${datum.y} ${datum.binnedData[0].activity} activity` : null
              }
            />
          }
        >
          <VictoryLabel
            x={225}
            y={25}
            textAnchor="middle"
          />
  
          <VictoryStack
            colorScale={[
              "#003f5c",
              "#2f4b7c",
              "#6651",
              "#a05195",
              "#d45087",
              "#f95d6a",
              "#ff7c43",
              "#ffa600"
            ]}
          >
            {Object.entries(groupedData).map(([key, dataGroup]) => {
              
              return (
                <VictoryHistogram
                  key={key}
                  data={dataGroup}
                  x="day"
                  binSpacing={8}
                  style={{
                    data: { strokeWidth: 0 }
                  }}
                />
              );
            })}
          </VictoryStack>
  
          <VictoryAxis
            tickCount={12}
            tickFormat={(date) =>
              new Date(date).toLocaleString("default", { month: "short" })
            }
            style={sharedAxisStyles}
          />
  
          <VictoryAxis
            dependentAxis
            label=""
            style={sharedAxisStyles}
            tickCount={5}
            tickFormat={(tick) => `${tick}`}
          />
        </VictoryChart>
      </div>
    );
  };

export default StackedHistogram;