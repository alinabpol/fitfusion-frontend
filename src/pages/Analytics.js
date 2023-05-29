import Card from "../components/Card"
import AnalyticsCircle from "../components/AnalyticsCircle"
import StackedHistogram from "../components/StackedHistogram";
import "../styling/Analytics.css"

function Analytics() {
    return (
      <div className="analytics-container">
        <h1> Analytics page</h1>
        <div className="grid-container">
          <Card>
            <div className="card1-header">
            <h2>GOAL PROGRESS CHART</h2>
            <h3>Weekly</h3>
            </div>
              <AnalyticsCircle/>
          </Card>
          
          <Card>
            <div className="card2-header">
              <h2>ACTIVITY TRACKER</h2>
              <h3>Yearly</h3>
            </div>
              <StackedHistogram/>
          </Card>
          
          <Card>
            3
          </Card>
          <Card>
            4
          </Card>
        </div>
      </div>
    );
  }
  
  export default Analytics;
  