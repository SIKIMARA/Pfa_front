import React from "react";
import "./HomeInterface.css";

//import { motion } from "framer-motion/dist/framer-motion";
import Typewriter from "typewriter-effect";
import { useState, useRef } from "react";
import usmba from "../../Images/USMBA.png"

import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
function HomeInterface() {
  const myRef = useRef(null);
  const executeScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="home">
        <img src={usmba} alt="" style={{zIndex:2,width:"200px",height:"250px"}}/>
        <h1
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 60 }}
          transition={{ type: "spring", duration: 2, stiffness: 50 }}
        >
          <span>GESTION</span> D'INVENTAIRE
        </h1>
        <Typewriter
          options={{
            strings: [
              "Ecole National des Sciences Appliqué",
              
            ],
            autoStart: true,
            loop: true,
          }}
        />
        
      </div>
    </>
  );
}

export default HomeInterface;
