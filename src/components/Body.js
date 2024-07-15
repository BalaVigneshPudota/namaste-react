import { restaurantList } from "../../utils/dumpData";
import { useState } from "react";

import RestCard from "./RestCard";

const Body = () => {
  const [resList, setResList] = useState(restaurantList);

  return (
    <div className="body-content">
      <div className="variousSearchOptions">
        <div className="search-bar">
          <input type="search" placeholder="Type here to search"></input>
        </div>

        <div className="topRated">
          <button
            type="button"
            onClick={() => {
              setResList(
                resList.filter((item) => {
                  return item.info.avgRating > 4.1;
                })
              );
              console.log(resList);
            }}
          >
            Top Rated
          </button>
        </div>
        <div className="sortItems">
          <button
            type="button"
            onClick={() => {
              const sortedArr = resList
                .map((item) => item)
                .sort((item1, item2) => {
                  return item1.info.avgRating - item2.info.avgRating;
                });
              setResList(sortedArr);
              resList.forEach((item) => {
                console.log(item.info.avgRating);
              });
              console.log(JSON.stringify(resList));
            }}
          >
            Sort By Rating (Low to High)
          </button>
        </div>
        <div className="quickDelivery">
          <button
            type="button"
            onClick={() => {
              const sortedArr = resList
                .map((item) => item)
                .sort((item1, item2) => {
                  return (
                    item1.info.sla.deliveryTime - item2.info.sla.deliveryTime
                  );
                });
              setResList(sortedArr);
              resList.forEach((item) => {
                console.log(item.info.avgRating);
              });
              console.log(JSON.stringify(resList));
            }}
          >
            Quick Delivery First
          </button>
        </div>
      </div>

      <div className="rest-container">
        {resList.map((item) => {
          return <RestCard resData={item} key={item.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
