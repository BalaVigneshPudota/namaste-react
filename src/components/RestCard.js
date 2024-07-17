import { SAMPLE_URL } from "../../utils/constants";

const RestCard = (props) => {
  const {
    name,
    cuisines,
    avgRatingString,
    totalRatingsString,
    sla,
    costForTwo,
    cloudinaryImageId,
  } = props.resData.info;
  return (
    <div className="res-card">
      <img src={SAMPLE_URL + cloudinaryImageId}></img>
      <div>
        <label>{name} </label>{" "}
        <span>
          {avgRatingString} Stars ({totalRatingsString})
        </span>
        <label>{cuisines.join(", ")}</label>
        <label>{sla.deliveryTime} mins</label>
        <label>{costForTwo}</label>
      </div>
    </div>
  );
};

export default RestCard;
