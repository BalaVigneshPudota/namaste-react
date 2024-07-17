import { restaurantList } from "../../utils/dumpData";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import RestCard from "./RestCard";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetchRestData();
  }, []);
  fetchRestData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();
      setResList(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      // console.log(
      //   jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      // );
    } catch (e) {
      console.log(JSON.stringify(e));
    }
  };
  return resList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body-content">
      <div className="variousSearchOptions">
        <div className="search-bar option-items">
          <input
            type="text"
            placeholder="Search restaurants"
            onChange={(e) => {
              console.log(e.target.value);
              if (e.target.value != "") {
                setResList(
                  [...resList].filter((item) => {
                    return (
                      item.info.name
                        .toLowerCase()
                        .indexOf(e.target.value.toLowerCase()) >= 0
                    );
                  })
                );
              } else {
                setResList(restaurantList);
              }
            }}
          ></input>
        </div>

        <div className="topRated option-items">
          <button
            type="button"
            className="search-btn-style"
            onClick={() => {
              setResList(
                resList.filter((item) => {
                  return item.info.avgRating > 4;
                })
              );
              console.log(resList);
            }}
          >
            Top Rated
          </button>
        </div>
        <div className="sortItems option-items">
          <button
            className="search-btn-style"
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
        <div className="quickDelivery option-items">
          <button
            className="search-btn-style"
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
          return (
            <Link key={item.info.id} to={"/restaurants/" + item.info.id}>
              <RestCard resData={item} />
            </Link>
          );
        })}
        {resList.map((item) => {
          return (
            <Link key={item.info.id} to={"/restaurants/" + item.info.id}>
              <RestCard resData={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
