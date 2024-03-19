import React from "react";

import { FaGithub, FaBitcoin } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

import "./header.modules.css";

function Header(){
  return (
    <div className="header">
      <h1>Exhibition</h1>
      <ul>
        <li><a href="#"><FaGithub className="header-icon"/></a></li>
        <li><a href="#"><TbApi className="api-icon"/><FaBitcoin className="header-icon"/></a></li>
      </ul>
    </div>
  )
}

export default Header;