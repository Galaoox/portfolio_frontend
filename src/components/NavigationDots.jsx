import React from "react";
import { navigationElements } from "../constants";

const elements = [...navigationElements, "testimonials"];

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {elements.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          onClick={() => setToggle(false)}
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
