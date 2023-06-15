import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse ,faBuilding,faTv,faMedal,faUserNurse,faFlask} from "@fortawesome/free-solid-svg-icons";
import { faLaptopFile } from "@fortawesome/free-solid-svg-icons";
import './Sidebar.css';


function Sidebar() {
  return (
    <>
      <div className="bg-[#191919] w-[15%] h-[100vh] rounded-md  px-[10px] py-[10px] sidebar">
        <h1 className="text-4xl font-semibold font-sans italic pt-4 pl-3 text-[#3cf]">NewsApp</h1>
        <hr className="mt-[30px]" />
        <ul type='none' className="flex justify-start flex-col  text-2xl font-md font-sans  cursor-pointer p-[20px]">
          <li className="pb-[15px] hover:bg-[#3cf] hover:text-black rounded-lg px-3 py-3 flex items-center justify-"> <span><FontAwesomeIcon icon={faHouse} className="icon" style={{fontSize:"23px",paddingRight:'20px'}} /></span> Home</li>
          <li className="pb-[15px]  hover:bg-[#3cf] rounded-lg px-3 py-3"> <span><FontAwesomeIcon icon={faBuilding} style={{fontSize:"23px",paddingRight:'20px'}} /></span>Business</li>
          <li className="pb-[15px]  hover:bg-[#3cf] rounded-lg px-3 py-3"> <span><FontAwesomeIcon icon={faTv} style={{fontSize:"23px",paddingRight:'15px'}} /></span>Entertainment</li>
          <li className="pb-[15px]  hover:bg-[#3cf] rounded-lg px-3 py-3"> <span><FontAwesomeIcon icon={faMedal} style={{fontSize:"23px",paddingRight:'20px'}} /></span>Sports</li>
          <li className="pb-[15px]  hover:bg-[#3cf] rounded-lg px-3 py-3"> <span><FontAwesomeIcon icon={faUserNurse} style={{fontSize:"23px",paddingRight:'20px'}}/></span>Health</li>
          <li className="pb-[15px]  hover:bg-[#3cf] rounded-lg px-3 py-3"> <span><FontAwesomeIcon icon={faFlask} style={{fontSize:"23px",paddingRight:'20px'}} /></span>Science</li>
          <li className="pb-[15px]  hover:bg-[#3cf] rounded-lg px-3 py-3"><span><FontAwesomeIcon icon={faLaptopFile} style={{fontSize:"23px",paddingRight:'10px'}} />  </span>Technology</li>
          <FontAwesomeIcon style={{color:'white'}} icon="fa-solid fa-house" />
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
