import { SAMPLE_URL } from "../../utils/constants";

const RestCard = (props) => {
  console.log(props);
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
        <h4>{name} </h4>
        <h5>{cuisines.join(", ")}</h5>
        <h5>
          {avgRatingString} Stars ({totalRatingsString})
        </h5>
        <h5>{sla.deliveryTime} mins</h5>
        <h5>{costForTwo}</h5>
      </div>
    </div>
  );
};

export default RestCard;
