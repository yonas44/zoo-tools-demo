import { useState } from "react";
import BarChart from "./chart";
import PropTypes from "prop-types";

const StatComponent = ({ selectedBtn, item }) => {
  const [category, setCategory] = useState(item.btns[0]);
  return (
    <>
      <div className="bg-white px-5 lg:px-10 py-5 shadow-md rounded-lg flex flex-col gap-5 min-h-[350px] ">
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold my-4">{item.title}</h3>
          <div className="flex gap-5 items-center">
            {item.btns.map((btn, index) => (
              <button
                key={index}
                className={`h-max w-fit rounded-lg py-1 ${
                  category === btn && "bg-selectedBtnBG px-3"
                }`}
                onClick={() => setCategory(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
        <BarChart
          selectedBtn={selectedBtn}
          calledFrom={item.callerName}
          category={category}
        />
        <button className="px-3 mt-auto py-1 bg-selectedBtnBG rounded-md hover:outline hover:outline-gray-300 hover:bg-transparent duration-200 w-fit">
          {item.button}
        </button>
      </div>
    </>
  );
};

StatComponent.defaultProps = {
  selectedBtn: null,
  item: null,
};

StatComponent.propTypes = {
  selectedBtn: PropTypes.string,
  item: PropTypes.object,
};

export default StatComponent;
