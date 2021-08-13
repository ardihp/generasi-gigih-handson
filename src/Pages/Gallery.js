import React, { useEffect } from "react";
import Search from "../Components/Search/";
import Image from "../Components/Image/";
// import Data from "../Constants/Data";
// import Data from "../Constants/Giphy";
import { useSelector, useDispatch } from "react-redux";
import { storeImage } from "../Redux/Slice";

function Gallery() {
  const images = useSelector(state => state.images.images);
  const dispatch = useDispatch();
  
  useEffect(() => {
    return () => {
      dispatch(storeImage([]));
    };
  }, [dispatch]);

  const handleClick = e => {
    e.preventDefault();
    const query = e.target.query.value;
    getImageData(query).then(res => dispatch(storeImage(res.data)));
  };

  const getImageData = async query => {
    const API_KEY = "1WDJ2vyc6qkeJKsdtp3a11xXs74xj2k3";
    const data = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=12`
    ).then(data => data.json());
    return data;
  };

  return (
    <div>
      <Search handleClick={handleClick} />
      {images.length > 0 &&
        images.map(
          image =>
            image.rating === "g" && (
              <Image
              data-testid="imageSearch"
                key={image.id}
                img={image.images.fixed_width.url}
                title={image.title}
              />
            )
        )}
    </div>
  );
}
export default Gallery;
