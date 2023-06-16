import React, { useEffect, useState ,useRef} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import "./NewsFeed.css";
import { unavailable } from "./config";

function NewsFeed({ category }) {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState('in');
  const dropdownRef = useRef(null);

  const fetchData = async () => {
    try {
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`;

      const response = await axios.get(apiUrl);
      const result = response.data;

      setData(result.articles);

      //console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category,country]);

  const toggleDropdown = () => {
    if (dropdownRef.current) {
      // Use Bootstrap's JavaScript methods to toggle the dropdown
      const dropdown = new window.bootstrap.Dropdown(dropdownRef.current);
      dropdown.toggle();
    }
  };

  return (
    <>
      <div className="w-[85%] pt-[20px] h-[100vh] ml-auto mr-auto">
        <center>
         
            <h1 className=" text-[42px] font-bold ml-[15%] text-[#3cf] underline ">
              {category.charAt(0).toUpperCase() + category.substring(1)} - Top
              Headlines
            </h1>
            <div className="dropdown text-right mt-[-40px] mr-[-6%]">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={toggleDropdown}
              >
                Country({country})
              </button>
              <ul
                className=" dropdown-menu "
                aria-labelledby="dropdownMenu2"
                key={Math.random()}
              >
                <li onClick={(e) => { e.preventDefault(); setCountry('in'); }}>
                  <a className="dropdown-item" >
                   India
                  </a>
                </li>
                <li onClick={(e) => { e.preventDefault(); setCountry('us'); }}>
                  <a className="dropdown-item"  >
                    USA
                  </a>
                </li>
                
              </ul>
            </div>
          
        </center>

        <div className="pt-[50px] p-[40px] card-wrapper">
          {data.map((ele) => {
            return (
              <div
                className=" p-[15px] bg-[#191919] flex flex-col justify-center rounded-md card
             "
                key={ele.id}
              >
                <img
                  className="w-[370px] h-[230px] mt-[15px] rounded-md mb-[15px] "
                  src={ele.urlToImage ? ele.urlToImage : unavailable}
                  alt=""
                />
                <h2 className="mb-[15px] text-[22px] font-bold">{ele.title}</h2>
                <p className=" mb-[15px]">
                  {ele.description
                    ? ele.description
                    : "Description is not available right now , Click on Read More to Read furhter"}
                </p>
                <p className="mb-[15px] italic font-extralight text-[#999]">
                  By {ele.author ? ele.author : "unknown"} Published on{" "}
                  {new Date(ele.publishedAt).toDateString()}
                </p>
                <center>
                  <a href={ele.url}>
                    <button className="read-btn" target="_blank">
                      Read More
                    </button>
                  </a>
                </center>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default NewsFeed;
