import React from "react";
import Search from "../Components/Search/";
import Image from "../Components/Image/";
import Data from "../Constants/Data";

function Gallery() {
  return (
    <div>
      <Search />
      <Image img={Data.url} title={Data.title} />
    </div>
  );
}

export default Gallery;
