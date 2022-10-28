import latestSprintData from './data/sprints_latest.json';
import SprintsOverTimeReport from './reports/sprintsOverTime';

function App() {

  const data = {
    sprintData: latestSprintData,
  };

  return (
    <div className="App" style={{'margin': '0 0 0 20px'}}>
      <h2>Projecthub Research Assistant</h2>
      <section>
        <h3>Sprints Over Time</h3>
        <div>
          <SprintsOverTimeReport sprintData={data.sprintData} />
        </div>
      </section>
    </div>
  );
}

export default App;
