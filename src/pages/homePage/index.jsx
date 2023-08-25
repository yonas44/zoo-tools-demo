import { useState } from "react";
import ReferralSection from "./referralSection";
import InsightSection from "./insightSection";
import StatSection from "./statSection";
import { referralBtns } from "../../data/referralBtns";

const HomePage = () => {
  const [selectedBtn, setBtn] = useState(referralBtns[3]);
  return (
    <>
      <ReferralSection selectedBtn={selectedBtn} setBtn={setBtn} />
      <InsightSection selectedBtn={selectedBtn} />
      <StatSection selectedBtn={selectedBtn} />
    </>
  );
};

export default HomePage;
