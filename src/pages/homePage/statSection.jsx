import { Fragment } from "react";
import Leaderboard from "../../components/leaderboard";
import { statComponents } from "../../data/statSectionDatas";
import StatComponent from "../../components/statComponent";
import PropTypes from "prop-types";

const StatSection = ({ selectedBtn }) => {
  return (
    <>
      <section className="grid md:grid-cols-2 gap-16 mb-20">
        <Leaderboard />
        {statComponents.map((item, index) => (
          <Fragment key={index}>
            <StatComponent item={item} selectedBtn={selectedBtn} />
          </Fragment>
        ))}
      </section>
    </>
  );
};

StatSection.defaultProps = {
  selectedBtn: null,
};

StatSection.propTypes = {
  selectedBtn: PropTypes.string,
};

export default StatSection;
