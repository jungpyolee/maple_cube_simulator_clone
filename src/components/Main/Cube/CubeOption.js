import React from "react";
import "../../../stylesheet/CubeOption.css";
function CubeOption(props) {
  const optionTier = props.optionTier;

  return (
    <div className="cubeOption_body">
      <div>
        {optionTier === 0 && (
          <div className="cubeOption_rare">&lt;잠재옵션&gt;</div>
        )}
        {optionTier === 1 && (
          <div className="cubeOption_rare">&lt;잠재옵션&gt;</div>
        )}
        {optionTier === 2 && (
          <div className="cubeOption_epic">&lt;잠재옵션&gt;</div>
        )}
        {optionTier === 3 && (
          <div className="cubeOption_unique">&lt;잠재옵션&gt;</div>
        )}
        {optionTier === 4 && (
          <div className="cubeOption_legendary">&lt;잠재옵션&gt;</div>
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

export default CubeOption;
