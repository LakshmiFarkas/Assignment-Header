import React from "react";
import "./submenu.css";

const Submenu = ({ title1, list1, title2, list2 }) => {
  return (
    <div className="submenu flex_center">
      <div className="flex_center list1">
        <ul>
          <li>{title1}</li>
          {list1.map((list_item, index) => (
            <li key={index}>
              <a>{list_item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex_center list2">
        <ul>
          <li>{title2}</li>
          {list2.map((list_item, index) => (
            <li key={index}>
              <a>{list_item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Submenu;
