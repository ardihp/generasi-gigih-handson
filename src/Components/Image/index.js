import React from "react";

function index({img, title}) {
  return (
    <div className="gambar">
      <img
        src={img}
        alt={title}
        title={title}
        style={{display: 'flex'}}
      />
      <p>{title}</p>
    </div>
  );
}

export default index;
