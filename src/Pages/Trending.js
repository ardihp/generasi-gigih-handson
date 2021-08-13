import React, { useEffect } from "react";
import Image from "../Components/Image/";
import { useSelector, useDispatch } from "react-redux";
import { storeImage } from "../Redux/Slice";
import { Link } from "react-router-dom";
import {Button} from "@material-ui/core";

function Trending() {
  const images = useSelector(state => state.images.images);
  const dispatch = useDispatch();

  useEffect(() => {
    const API_KEY = "1WDJ2vyc6qkeJKsdtp3a11xXs74xj2k3";
    fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=20&offset=5`
    )
      .then(res => res.json())
      .then(res => dispatch(storeImage(res.data)));
      return function(){
          dispatch(storeImage([]))
      };
  }, [dispatch]);

  return (
    <div>
      <Button variant="contained" color="primary">
        <Link to="/">
            Ke home
        </Link>
      </Button>
      {images.length > 0 &&
        images.map(image => (
          <Image
            key={image.id}
            img={image.images.fixed_width.url}
            title={image.title}
          />
        ))}
    </div>
  );
}

export default Trending;
