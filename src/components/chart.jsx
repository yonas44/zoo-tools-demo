import { Chart } from "chart.js/auto";
import { participantData } from "../data/participantsData";
import { Fragment, useEffect, useRef } from "react";
import { GoPeople } from "react-icons/go";
import { trafficData } from "../data/trafficData";
import { signUpLocationData } from "../data/signupLocationData";
import { behaviourData } from "../data/behaviourData";
import PropTypes from "prop-types";

const BarChart = ({ selectedBtn, calledFrom, category }) => {
  const progressChart = useRef(null);

  const collections = {
    participants: participantData,
    traffic: trafficData,
    signup: signUpLocationData,
    behaviour: behaviourData,
  };

  const getTotalParticipants = () => {
    let total = 0;

    collections[calledFrom][selectedBtn].forEach((item) => {
      total += item.count;
    });
    return total;
  };

  const generateLabels = () => {
    const labels = [];

    collections[calledFrom][selectedBtn].forEach((item) => {
      if (!item.category) {
        labels.push(item.date || item.hour || item.name);
      } else if (item.category === category) {
        labels.push(item.date || item.hour || item.name);
      }
    });

    return labels;
  };

  const generateData = () => {
    const data = [];
    collections[calledFrom][selectedBtn].forEach((item) => {
      if (!item.category) {
        data.push(item.count);
      } else if (item.category === category) {
        data.push(item.count);
      }
    });
    return data;
  };

  const data = {
    labels: generateLabels(selectedBtn),
    datasets: [
      {
        data: generateData(selectedBtn),
        borderRadius: calledFrom === "participants" ? 20 : 10,
        backgroundColor: calledFrom === "participants" ? "#FED500" : "#FFF5C2",
        barPercentage: calledFrom === "participants" ? 0.5 : 1,
      },
    ],
  };

  const titleToolTip = (event) => {
    return `${event[0].raw} Signups`;
  };

  const getMaxData = () => {
    let maxData = participantData[selectedBtn][0];
    participantData[selectedBtn].map((item) => {
      if (item.count > maxData.count) {
        maxData = item;
      }
    });

    return maxData.count;
  };

  const labelToolTip = (event) => {
    return `${event.label} `;
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      responsive: true,
      aspectRatio: calledFrom === "participants" ? 4 : 2,
      indexAxis: calledFrom !== "participants" && "y",
      plugins: {
        legend: {
          display: false,
        },

        tooltip: {
          yAlign: "bottom",
          displayColors: false,
          backgroundColor: "white",
          titleColor: "black",
          borderWidth: 1,
          borderColor: "lightgray",
          bodyColor: "black",
          offset: 100,
          callbacks: {
            title: titleToolTip,
            label: labelToolTip,
          },
        },
      },
      scales: {
        x: {
          display: false,
          max: calledFrom !== "participants" ? getTotalParticipants() : 4000,
          grid: {
            display: false,
          },
        },
        y: {
          display: false,
          grace: getMaxData(),
        },
      },
    },
  };

  useEffect(() => {
    const chart = new Chart(progressChart.current, config);

    return () => {
      chart.destroy();
    };
  }, [config]);

  return (
    <div className="relative flex flex-col">
      {calledFrom === "participants" && (
        <div className="absolute md:top-5 z-10 md:left-5">
          <p className="flex items-center gap-3">
            <span className="md:text-5xl">{getTotalParticipants()}</span>
            <GoPeople className="md:text-3xl" />
          </p>
          <p className="md:pl-2 text-gray-500">Participants</p>
        </div>
      )}
      <div className="flex w-full bg-white relative">
        <canvas className="w-full relative z-10" ref={progressChart}></canvas>
        {calledFrom !== "participants" && (
          <ul className="absolute left-0 z-10 h-full w-full flex flex-col justify-between px-3 py-3 lg:text-[1.2rem]">
            {collections[calledFrom][selectedBtn].map((item, index) => (
              <Fragment key={index}>
                {item.category === category && (
                  <li className="flex justify-between">
                    <span>{item.name}</span>
                    <span>{item.count}</span>
                  </li>
                )}
              </Fragment>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

BarChart.defaultProps = {
  selectedBtn: null,
  calledFrom: null,
  category: null,
};

BarChart.propTypes = {
  selectedBtn: PropTypes.string,
  calledFrom: PropTypes.string,
  category: PropTypes.string,
};

export default BarChart;
