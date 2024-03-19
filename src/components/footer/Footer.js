import React from "react";

import { TbApi } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

import "./footer.modules.css";

function Footer(){
  return(
    <div className="footer">
      <div></div>
      <div></div>
      <p><TbApi className="footer-icon" />API for <a href="https://coinpaprika.com" target="_blank" >coinpaprika.com</a></p>
      <p>&copy; Copy <a href="https://github.com/Just0neMoment" target="_blank">Just0neMoment</a> All Rights Reserved.</p>
      <p className="git"><FaGithub className="footer-icon" /><a href="https://github.com/Just0neMoment/React-weather-report" target="_blank" >Site Source</a></p>
      <div></div>
      <div></div>
    </div>
  )
}

export default Footer;