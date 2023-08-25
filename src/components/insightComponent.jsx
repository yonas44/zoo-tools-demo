import { Fragment } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import PropTypes from "prop-types";

const InsightComponent = ({ item }) => {
  return (
    <>
      <div className="border border-insightTipBG rounded-md shadow">
        <div className="flex gap-4 items-center p-3">
          {item.state === "dynamic" ? (
            <Fragment>
              {item.progress > 0 ? (
                <AiFillCaretUp className="p-3 min-w-[50px] min-h-[45px] rounded-lg bg-insightGreen text-white" />
              ) : (
                <AiFillCaretDown className="p-3 min-w-[45px] min-h-[45px] rounded-lg bg-insightRed text-white" />
              )}
            </Fragment>
          ) : (
            <HiOutlineLightBulb className="p-3 min-w-[45px] min-h-[45px] rounded-lg bg-[#FED500]" />
          )}
          <p>
            <span className="font-semibold">{item.title}</span>{" "}
            {item.progressDescription && (
              <span>{item.progressDescription}</span>
            )}
          </p>
        </div>
        <div className="bg-insightTipBG p-4 text-sm">{item.tips}</div>
      </div>
    </>
  );
};

InsightComponent.defaultProps = {
  item: null,
};

InsightComponent.propTypes = {
  item: PropTypes.object,
};

export default InsightComponent;
