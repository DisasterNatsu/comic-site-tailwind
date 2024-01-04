import React from "react";

const FirstAndLast = () => {
  return (
    <div className="flex px-2 gap-x-4">
      <button className="px-4 py-2 bg-slate-500 rounded-md text-white hover:bg-slate-900 hover:text-white shadow-sm">
        Read First
      </button>
      <button className="px-4 py-2 bg-slate-500 rounded-md text-white hover:bg-slate-900 hover:text-white shadow-sm">
        Read Last
      </button>
    </div>
  );
};

export default FirstAndLast;
