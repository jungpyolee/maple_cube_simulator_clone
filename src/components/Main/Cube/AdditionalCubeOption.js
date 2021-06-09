import React from "react";
import "../../../stylesheet/CubeOption.css";

function AdditionalCubeOption(props) {
  const additionalOptionTier = props.additionalOptionTier;
  return (
    <div className="cubeOption_body">
      <div>
        {additionalOptionTier === 0 && (
          <div className="cubeOption_rare">&lt;에디셔널 잠재옵션&gt;</div>
        )}
        {additionalOptionTier === 1 && (
          <div className="cubeOption_rare">&lt;에디셔널 잠재옵션&gt;</div>
        )}
        {additionalOptionTier === 2 && (
          <div className="cubeOption_epic">&lt;에디셔널 잠재옵션&gt;</div>
        )}
        {additionalOptionTier === 3 && (
          <div className="cubeOption_unique">&lt;에디셔널 잠재옵션&gt;</div>
        )}
        {additionalOptionTier === 4 && (
          <div className="cubeOption_legendary">&lt;에디셔널 잠재옵션&gt;</div>
        )}
      </div>
      <div className="cubeOption_options">
        <div>{props.data4}</div>
        <div>{props.data5}</div>
        <div>{props.data6}</div>
      </div>
    </div>
  );
}

export default AdditionalCubeOption;
