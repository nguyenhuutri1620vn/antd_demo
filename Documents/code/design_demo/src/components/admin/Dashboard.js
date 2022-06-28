import { Line, Area, Column, Bar, Pie } from "@ant-design/charts";
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Row,
  Skeleton,
  Transfer,
} from "antd";
import React, { useCallback, useState } from "react";
import moment from "moment";

const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `item ${i + 1}`,
    description: `description of item ${i + 1}`,
  });
}
const initialTargetKeys = mockData
  .filter((item) => +item.key >= 10)
  .map((item) => item.key);
const DemoPie = () => {
  const data = [
    {
      type: "blue",
      value: 27,
    },
    {
      type: "green",
      value: 25,
    },
    {
      type: "gray",
      value: 18,
    },
    {
      type: "yellow",
      value: 15,
    },
    {
      type: "purlpe",
      value: 10,
    },
    {
      type: "baby-blue",
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "Color",
      },
    },
  };
  return <Pie {...config} />;
};
function Dashboard() {
  const { RangePicker } = DatePicker;
  const [date, setDate] = useState({
    from: moment(),
    to: moment(),
  });
  const [targetKeys, setTargeKeys] = useState(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const dateFormat = "MM-DD-YYYY";

  const onScroll = (direction, e) => {
    console.log("direction: ", direction);
    console.log("target: ", e.target);
  };

  const data = [
    { year: "1991", value: 3 },
    { year: "1992", value: 5 },
    { year: "1994", value: 2 },
    { year: "1996", value: 1 },
    { year: "1997", value: 4 },
    { year: "1998", value: 6 },
    { year: "1999", value: 7 },
    { year: "1999", value: 8 },
  ];

  const config = {
    data,
    width: 300,
    height: 150,
    autoFit: false,
    xField: "year",
    yField: "value",
    point: {
      size: 5,
      shape: "diamond",
    },
    label: {
      style: {
        fill: "#aaa",
      },
    },
  };

  const configMain = {
    data,
    with: 750,
    height: 320,
    autoFit: false,
    color: "#597ef7",
    xField: "year",
    yField: "value",
    point: {
      size: 5,
      shape: "diamond",
    },
    label: {
      style: {
        fill: "#aaa",
      },
    },
  };

  const onChangeRange = (dates, datestrings) => {
    // console.log({ ...date, range: dates})
    const startTime = moment(dates[0]._d).format(dateFormat);
    const endTime = moment(dates[1]._d).format(dateFormat);
    setDate({ ...date, from: startTime, to: endTime });
  };

  const onClickOne = useCallback(() => {
    setDate({ ...date, from: "01-01-1991", to: "01-01-1995" });
  }, [date]);

  const onClickTwo = (e) => {
    setDate({ ...date, from: "01-01-1995", to: "01-01-1999" });
  };

  // const range = useMemo(() => {
  //   const range = [];
  //   range.push(date.from, date.to);
  //   return range;
  // }, [date]);

  const onCalendarChangePicker = useCallback((dates, datestrings, info) => {
    console.log(info);
  }, []);

  const onChange = (nextTargetKeys, direction, moveKeys) => {
    console.log("targetKeys: ", nextTargetKeys);
    console.log("direction: ", direction);
    console.log("moveKeys: ", moveKeys);
    setTargeKeys(nextTargetKeys);
  };

  const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    console.log("sourceSelectedKeys: ", sourceSelectedKeys);
    console.log("targetSelectedKeys: ", targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  const lineChart = { ...config, color: "#ff4d4f" };
  const areaChart = { ...config, color: "#7cb305" };
  const comlumnChart = { ...config, color: "#08979c" };
  const barChart = { ...config, color: "#531dab" };

  return (
    <div className="dashboard">
      <div className="date-picker-place">
        <Row>
          <Col span={6} className="col-date-picker-place">
            <Line {...lineChart} />
          </Col>
          <Col span={6} className="col-date-picker-place">
            <Area {...areaChart} />
          </Col>
          <Col span={6} className="col-date-picker-place">
            <Column {...comlumnChart} />
          </Col>
          <Col span={6} className="col-date-picker-place">
            <Bar {...barChart} />
          </Col>
        </Row>
        <Row className="chart-main">
          <Col span={16} className="main-chart-dashboard">
            <h3>Dashboard-main</h3>
            <Column {...configMain} />
          </Col>
          <Col span={8} className="main-chart-dashboard">
            <Button type="link" onClick={onClickOne}>
              91-95
            </Button>
            <Button type="link" onClick={onClickTwo}>
              95-99
            </Button>
            <RangePicker
              onChange={onChangeRange}
              format="MM-DD-YYYY"
              defaultValue={
                (moment(date.from, "MM-DD-YYYY"), moment(date.to, "MM-DD-YYYY"))
              }
              defaultPickerValue={
                (moment(date.from, "MM-DD-YYYY"), moment(date.to, "MM-DD-YYYY"))
              }
              onCalendarChange={onCalendarChangePicker}
            />
            <div className="transfer-area">
              <Transfer
                dataSource={mockData}
                titles={["Source, Target"]}
                targetKeys={targetKeys}
                selectedKeys={selectedKeys}
                onChange={onChange}
                onSelectChange={onSelectChange}
                onScroll={onScroll}
                render={(item) => item.title}
                // className="transfer"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="bar-chart  padding-bar-chart" span={12}>
            <Row>
              <div className="title-bar-chart">Line Chart Basics</div>
              <Divider />
              <Col span={12}>
                <Line {...lineChart} />
              </Col>
              <Col span={12}>
                <Area {...areaChart} />
              </Col>
              <Skeleton />
            </Row>
          </Col>
          <Col className="bar-chart margin-right" span={12}>
            <div className="title-bar-chart padding-bar-chart">
              Line Chart Basics
            </div>
            <Divider />
            <div className="donut-chart">
              <DemoPie />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Dashboard;
