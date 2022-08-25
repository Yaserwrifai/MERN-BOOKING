import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
  const photos = [
    "https://media-cdn.tripadvisor.com/media/photo-s/23/07/8c/91/exterior-facade-entrance.jpg",
    "https://media-cdn.tripadvisor.com/media/photo-s/1d/13/75/3d/exterior-view-novum-hotel.jpg",
    "https://media-cdn.holidaycheck.com/w_1280,h_720,c_fill,q_auto,f_auto/ugc/images/30fb4042-12e2-432d-b361-f09786a302bb",
    "https://cf.bstatic.com/xdata/images/hotel/max500/264110890.jpg?k=a1aa8eff52f2a39a38278866d9f37f9f278cc29afbbbfc8f3148981cae4d9193&o=&hp=1",
  ];
  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item,i) => (
            <div className="fpItem" key={item._id}>
              <img
                src={photos[i]}
                alt="Not Found"
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
