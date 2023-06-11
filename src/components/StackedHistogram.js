import { VictoryChart, VictoryVoronoiContainer, VictoryLabel, VictoryStack, VictoryHistogram, VictoryAxis } from 'victory'
import _ from 'lodash';
import { useState } from 'react';
import "../styling/Analytics.css"

const StackedHistogram = () => {
  // eslint-disable-next-line
    const [workoutData, setWorkoutData] = useState([
        { activity: "Running", day: new Date(2023, 8, 1)},
        { activity: "Running", day: new Date(2023, 8, 1)},
        { activity: "Running", day: new Date(2023, 8, 1)},
        { activity: "Running", day: new Date(2023, 8, 1)},
        { activity: "Running", day: new Date(2023, 9, 1) },
        { activity: "Yoga", day: new Date(2023, 5, 2) },
        { activity: "Gym", day: new Date(2023, 6, 2) },
        { activity: "Pilates", day: new Date(2023, 10, 4) },
        { activity: "Pilates", day: new Date(2023, 10, 4) },
        { activity: "Boxing", day: new Date(2023, 10, 4) },
        { activity: "Boxing", day: new Date(2023, 10, 4) },
        { activity: "Boxing", day: new Date(2023, 10, 4) },
        { activity: "Boxing", day: new Date(2023, 3, 2) },
        { activity: "Yoga", day: new Date(2023, 2, 2) },
        { activity: "2", day: new Date(2023, 2, 2) },
        { activity: "2", day: new Date(2023, 2, 2) },
        { activity: "2", day: new Date(2023, 2, 2) },
        { activity: "3", day: new Date(2023, 2, 2) },
        { activity: "3", day: new Date(2023, 2, 2) },
       
      ]);

    const groupedData = _.groupBy(workoutData, ({ activity }) => activity);

    const sharedAxisStyles = {
      tickLabels: {
        fontSize: 15,
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
          // scale={{ x: "time" }}
          containerComponent={
            <VictoryVoronoiContainer
            style={{}}
              labels={({ datum }) =>
                datum.y > 0 ? `${datum.y} ${workoutData[0].activity} activity` : null
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
            tickValues={[1, 3, 6, 9, 12]} 
            style={sharedAxisStyles}
          />
        </VictoryChart>
      </div>
    );
  };

export default StackedHistogram;