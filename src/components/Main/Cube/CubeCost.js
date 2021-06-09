import React from "react";

function CubeCost(props) {
  return (
    <div>
      총{props.count}개
      <br />
      {props.price}원
    </div>
  );
}

export default CubeCost;
