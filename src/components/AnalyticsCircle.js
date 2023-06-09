import { useEffect, useState } from 'react'
import { VictoryPie, VictoryAnimation, VictoryLabel } from 'victory'
import "../styling/Analytics.css"


function AnalyticsCircle({ goal, completed }) {
  const [percent, setPercent] = useState(25)
  const [data, setData] = useState(getData(0))




  useEffect(() => {
    const newPercent = (completed / goal) * 100  
    setPercent(newPercent);
    setData(getData(newPercent));
    console.log("this is completed", completed)
  }, [completed, goal]);



  function getData(percent) {
    return [
      { x: 1, y: percent },
      { x: 2, y: 100 - percent },
    ];
  }

  return (
    <div style={{ width: '100%', height: '100%', maxWidth: '400px', maxHeight: '400px' }}>
      <svg viewBox="0 0 400 400" width="100%" height="100%">
        <VictoryPie
          standalone={false}
          animate={{ duration: 1000 }}
          width={400}
          height={400}
          data={data}
          innerRadius={120}
          cornerRadius={25}
          labels={() => null}
          style={{
            data: {
              fill: ({ datum }) => {
                const color = datum.y > 30 ? '#F50057' : '#FF5252'
                return datum.x === 1 ? color : 'transparent'
                
              },
            },
          }}
        />
        <VictoryAnimation duration={1000} data={{ percent }}>
          {(newProps) => {
            return (
              <VictoryLabel
                textAnchor="middle"
                verticalAnchor="middle"
                x={200}
                y={200}
                text={`${Math.round(newProps.percent)}%`}
                style={{ fontSize: 45, fill: 'white'  }}
              />
            );
          }}
        </VictoryAnimation>
      </svg>
    </div>
  );
}

export default AnalyticsCircle;
