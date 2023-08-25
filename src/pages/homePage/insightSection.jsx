import { insightData } from "../../data/insightData";
import { Fragment } from "react";
import InsightComponent from "../../components/insightComponent";
import PropTypes from "prop-types";

const InsightSection = ({ selectedBtn }) => {
  return (
    <>
      <div className="my-10 md:my-16 grid gap-10 bg-white p-5 md:p-10 shadow-md">
        <div className="w-full gap-4 flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h2 className="text-xl md:text-3xl font-semibold lg:text-4xl">
              ZooTools AI-Powered insights
            </h2>
            <p className="text-sm md:text-xl">
              Making analytics simple and actionable
            </p>
          </div>
          <button className="p-2 md:p-3 rounded-lg text-gray-500 border border-gray-300 w-fit hover:bg-selectedBtnBG duration-200">
            Ask question
          </button>
        </div>

        <section className=" grid md:grid-cols-2 gap-10">
          {insightData[selectedBtn].map((item, index) => (
            <Fragment key={index}>
              <InsightComponent item={item} />
            </Fragment>
          ))}
        </section>
      </div>
    </>
  );
};

InsightSection.defaultProps = {
  selectedBtn: null,
};

InsightSection.propTypes = {
  selectedBtn: PropTypes.string,
};

export default InsightSection;
