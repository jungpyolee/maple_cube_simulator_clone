import React, { useState } from "react";
import "../../../stylesheet/Cube.css";

import CubeWeaponSelection from "./Cube_Weapon_Selection/CubeWeaponSelection";
function Cube() {
  return (
    <div>
      <div>
        <CubeWeaponSelection />
      </div>
      <div></div>
    </div>
  );
}

export default Cube;
