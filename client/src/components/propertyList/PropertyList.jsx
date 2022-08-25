import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://media.timbu.com/img/h1408402/391/281/b1/michelberger-hotel-1408402-1.jpg",
    "https://www.aveliving.com/AVE/media/Property_Images/Florham%20Park/hero/flor-apt-living-(2)-hero.jpg?ext=.jpg",
    "https://media-cdn.tripadvisor.com/media/photo-s/15/9b/44/ca/nirali-resorts.jpg",
    "https://dykhzttck504m.cloudfront.net/collections/backgrounds/large_groups_optimised.jpg",
    "https://static.dezeen.com/uploads/2021/01/niliaitta-cabin-studio-puisto-finland_dezeen_2364_sq3.jpg",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {images.map((item,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={item}
                  alt="NOT fOUND"
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
