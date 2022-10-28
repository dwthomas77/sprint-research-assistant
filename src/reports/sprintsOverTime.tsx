import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

type propTypes = {
  sprintData: sprintData[];
};

type sprintData = {
  sprint: number;
  estimated: number;
  claimed: number;
  completed: number;
  adjusted: number;
  incomplete: number;
};

type renderData = {
  name: string;
  EstimatedPoints: number;
  CompletedPoints: number;
};

function convertSprintData(data: sprintData[]) {
  const convertedData = data.map((data) => ({
    name: `Sprint ${data.sprint}`,
    EstimatedPoints: data.estimated,
    CompletedPoints: data.claimed,
  }));
  return convertedData;
}

const renderLineChart = (renderData: renderData[]) => (
  <>
    <LineChart
      width={730}
      height={250}
      data={renderData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis type="number" domain={[0, 50]} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="EstimatedPoints" stroke="#8884d8" />
      <Line type="monotone" dataKey="CompletedPoints" stroke="#82ca9d" />
    </LineChart>
  </>
);

const SprintsOverTimeReport = (props: propTypes) => {
  const convertedData = convertSprintData(props.sprintData);
  console.log(convertedData);
  return <div>{renderLineChart(convertedData)}</div>;
};

export default SprintsOverTimeReport;
