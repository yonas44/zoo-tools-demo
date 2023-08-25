import BarChart from "../../components/chart";
import { referralBtns } from "../../data/referralBtns";
import PropTypes from "prop-types";

const ReferralSection = ({ selectedBtn, setBtn }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-3 justify-between items-center my-8">
        <h2 className="text-xl md:text-2xl font-extrabold">
          Summer referral competition
        </h2>
        <div className="flex gap-3 shadow-md p-2 rounded-md">
          {referralBtns.map((btn, index) => (
            <button
              key={index}
              className={`text-gray-500 px-3 py-1 rounded-lg ${
                selectedBtn === btn ? "bg-selectedBtnBG" : "bg-btnBG"
              }`}
              onClick={() => setBtn(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white p-5 shadow-md">
        <BarChart selectedBtn={selectedBtn} calledFrom="participants" />
      </div>
    </>
  );
};

ReferralSection.defaultProps = {
  selectedBtn: null,
  setBtn: null,
};

ReferralSection.propTypes = {
  selectedBtn: PropTypes.string,
  setBtn: PropTypes.func,
};

export default ReferralSection;
