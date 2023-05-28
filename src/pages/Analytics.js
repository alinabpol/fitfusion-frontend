import AnalyticsCircle from "../components/AnalyticsCircle";
import Card from "../components/Card";


function Analytics() {
    return (
      <div className="analytics-container">
        <h1> Analytics page</h1>
        <div className="grid-container">
          <Card>
            <AnalyticsCircle/>
          </Card>
          
          <Card>
            2
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
  