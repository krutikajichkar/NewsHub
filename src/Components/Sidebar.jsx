import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBuilding,
  faTv,
  faMedal,
  faUserNurse,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";
import { faLaptopFile } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import NewsFeed from "./NewsFeed";


function Sidebar() {
  const [category, setCategory] = useState('general');
  return (
    <div className="flex justify-between">
      <div className="bg-[#191919] w-[18%] h-[100vh] rounded-md  px-[10px] py-[10px] sidebar">
        <h1
          className="text-4xl font-semibold font-sans italic pt-4 pl-3 text-[#3cf] cursor-pointer scroll-smooth headlinebar"
          onClick={() => window.scroll(0, 0)}
        >
          NewsApp
        </h1>
        <hr className="mt-[30px]" />
        <ul
          type="none"
          className="flex justify-start flex-col  text-2xl font-md font-sans  cursor-pointer p-[20px] sidebarlist"
        >
          <li className="pb-[15px] hover:bg-[#3cf] hover:text-black rounded-lg px-3 py-3" onClick={() =>{ setCategory('general'); console.log(category)}}>
            {" "}
            <span>
              <FontAwesomeIcon
                icon={faHome}
                className="icon"
                style={{ fontSize: "23px", paddingRight: "20px" }}
              />
            </span>{" "}
            Home
          </li>
          <li className="pb-[15px]  hover:bg-[#3cf] rounded-lg px-3 py-3" onClick={() => setCategory('business')}>
            {" "}
            <span>
              <FontAwesomeIcon
                icon={faBuilding}
                style={{ fontSize: "23px", paddingRight: "20px" }}
              />
            </span>
            Business
          </li>
          <li className="pb-[15px]  hover:bg-[#3cf] rounded-lg px-3 py-3" onClick={() => setCategory('entertainment')}>
            {" "}
            <span>
              <FontAwesomeIcon
                icon={faTv}
                style={{ fontSize: "23px", paddingRight: "15px" }}
              />
            </span>
            Entertainment
          </li>
          <li className="pb-[15px]  hover:bg-[#3cf] rounded-lg px-3 py-3" onClick={() => setCategory('sports')}>
            {" "}
            <span>
              <FontAwesomeIcon
                icon={faMedal}
                style={{ fontSize: "23px", paddingRight: "20px" }}
              />
            </span>
            Sports
          </li>
          <li className="pb-[15px]  hover:bg-[#3cf] rounded-lg px-3 py-3" onClick={() => setCategory('health')}>
            {" "}
            <span>
              <FontAwesomeIcon
                icon={faUserNurse}
                style={{ fontSize: "23px", paddingRight: "20px" }}
              />
            </span>
            Health
          </li>
          <li className="pb-[15px]  hover:bg-[#3cf] rounded-lg px-3 py-3" onClick={() => setCategory('science')}>
            {" "}
            <span>
              <FontAwesomeIcon
                icon={faFlask}
                style={{ fontSize: "23px", paddingRight: "20px" }}
              />
            </span>
            Science
          </li>
          <li className="pb-[15px]  hover:bg-[#3cf] rounded-lg px-3 py-3" onClick={() => setCategory('technology')}>
            <span>
              <FontAwesomeIcon
                icon={faLaptopFile}
                style={{ fontSize: "23px", paddingRight: "10px" }}
              />{" "}
            </span>
            Technology
          </li>

         
        </ul>
        
      </div>
      <div className="bg-[#191919] w-[18%] h-[100vh] rounded-md  px-[3px] py-[3px] sidebarMobile">
        <h1
          className="text-4xl font-semibold font-sans italic pt-4 pl-3 text-[#3cf] cursor-pointer scroll-smooth"
          onClick={() => window.scroll(0, 0)}
        >
          NewsApp
        </h1>
        <hr className="mt-[30px]" />
        <ul
          type="none"
          className="flex justify-start flex-col  text-2xl font-md font-sans  cursor-pointer p-[20px] sidebarlist"
        >
          <li className="pb-[15px] hover:bg-[#3cf] hover:text-black rounded-lg " onClick={() =>{ setCategory('general'); console.log(category)}}>
            {" "}
            <span>
              <FontAwesomeIcon
                icon={faHome}
                className="icon"
                style={{ fontSize: "23px" ,paddingBottom: "15px"}}
              />
            </span>{" "}
           
          </li>
          <li className="pb-[15px]  hover:bg-[#3cf] rounded-lg " onClick={() => setCategory('business')}>
            {" "}
            <span>
              <FontAwesomeIcon
                icon={faBuilding}
                style={{ fontSize: "23px", paddingBottom: "15px" }}
              />
            </span>
           
          </li>
          <li className="pb-[15px]  hover:bg-[#3cf] rounded-lg " onClick={() => setCategory('entertainment')}>
            {" "}
            <span>
              <FontAwesomeIcon
                icon={faTv}
                style={{ fontSize: "23px", paddingBottom: "15px" }}
              />
            </span>
           
          </li>
          <li className="pb-[15px]  hover:bg-[#3cf] rounded-lg" onClick={() => setCategory('sports')}>
            {" "}
            <span>
              <FontAwesomeIcon
                icon={faMedal}
                style={{ fontSize: "23px", paddingBottom: "15px" }}
              />
            </span>
           
          </li>
          <li className="pb-[15px]  hover:bg-[#3cf] rounded-lg" onClick={() => setCategory('health')}>
            {" "}
            <span>
              <FontAwesomeIcon
                icon={faUserNurse}
                style={{ fontSize: "23px", paddingBottom: "15px" }}
              />
            </span>
            
          </li>
          <li className="pb-[15px]  hover:bg-[#3cf] rounded-lg" onClick={() => setCategory('science')}>
            {" "}
            <span>
              <FontAwesomeIcon
                icon={faFlask}
                style={{ fontSize: "23px", paddingBottom: "15px" }}
              />
            </span>
           
          </li>
          <li className="pb-[15px]  hover:bg-[#3cf] rounded-lg" onClick={() => setCategory('technology')}>
            <span>
              <FontAwesomeIcon
                icon={faLaptopFile}
                style={{ fontSize: "23px", paddingBottom: "15px"}}
              />{" "}
            </span>
            
          </li>

         
        </ul>
        
      </div>
      <NewsFeed category={category}/>
    </div>
  );
}

export default Sidebar;
