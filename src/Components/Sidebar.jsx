import React from "react";

function Sidebar() {
  return (
    <>
      <div className="bg-[#191919] w-[15%] h-[100vh] rounded-md  snap-none px-[10px] py-[10px]">
        <h1 className="text-4xl font-semibold font-sans italic pt-4 pl-3 text-blue-300">NewsApp</h1>
        <hr className="mt-[30px]" />
        <ul type='none' className="flex justify-start flex-col  text-2xl font-md font-sans mt-[30px] cursor-pointer">
          <li className="pb-[15px] hover:bg-blue-700 rounded-lg px-3 py-3">Home</li>
          <li className="pb-[15px]  hover:bg-blue-700 rounded-lg px-3 py-3">Business</li>
          <li className="pb-[15px]  hover:bg-blue-700 rounded-lg px-3 py-3">Entertainment</li>
          <li className="pb-[15px]  hover:bg-blue-700 rounded-lg px-3 py-3">Sports</li>
          <li className="pb-[15px]  hover:bg-blue-700 rounded-lg px-3 py-3">Health</li>
          <li className="pb-[15px]  hover:bg-blue-700 rounded-lg px-3 py-3">Science</li>
          <li className="pb-[15px]  hover:bg-blue-700 rounded-lg px-3 py-3">Technology</li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
