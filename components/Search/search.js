import React from "react";

const Search = () => {
  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        placeholder="Search cuisine/restaurant"
        className="px-4 py-2 border border-gray-300 rounded-[30px] focus:outline-none focus:border-[#FFA902] w-[278.31px]"
      />

      {/* <button className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
        Search
      </button> */}
    </div>
  );
};

export default Search;
