import React from "react";
import "../../../stylesheet/Cube.css";
import CubeWeaponSelection from "./Cube_Weapon_Selection/CubeWeaponSelection";
function Cube() {
  return (
    <div className="cube_body">
      <CubeWeaponSelection />
    </div>
  );
}

export default Cube;
