import { leaderList } from "../data/leaderData";

const Leaderboard = () => {
  return (
    <>
      <div className="bg-white px-5 md:px-10 py-5 flex flex-col rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold my-4">User leaderboard</h3>
        <ul className="flex-1 grid gap-5 text-sm md:text-base">
          <li className="grid grid-cols-4 gap-3">
            <span className="col-span-2">Email</span>
            <span>Friend invited</span>
            <span>Country</span>
          </li>
          {leaderList.map((item, index) => (
            <li key={index} className="grid grid-cols-4 gap-3">
              <span className="col-span-2 overflow-auto">{item.email}</span>
              <span>{item.invites}</span>
              <span>{item.country}</span>
            </li>
          ))}
        </ul>
        <button className="px-3 py-1 mt-6 bg-selectedBtnBG rounded-md hover:outline hover:outline-gray-300 hover:bg-transparent duration-200 w-fit">
          See leaderboard
        </button>
      </div>
    </>
  );
};

export default Leaderboard;
