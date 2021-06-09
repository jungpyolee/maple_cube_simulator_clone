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
        <div>옵션1</div>
        <div>옵션2</div>
        <div>옵션3</div>
      </div>
    </div>
  );
}

export default AdditionalCubeOption;
