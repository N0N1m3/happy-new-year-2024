import { memo } from "react";

import "./elk.css";

export const Elk = memo(() => {
  return (
    <div className="tree-container">
      <div className="tree">
        <div className="star"></div>
        <div className="cone tree-cone1"></div>
        <div className="cone tree-cone2"></div>
        <div className="cone tree-cone3"></div>
        <div className="trunk"></div>
        <div className="ornament or1">
          <div className="shine"></div>
        </div>
        <div className="ornament or2">
          <div className="shine"></div>
        </div>
        <div className="ornament or3">
          <div className="shine"></div>
        </div>
        <div className="ornament or4">
          <div className="shine"></div>
        </div>
        <div className="ornament or5">
          <div className="shine"></div>
        </div>
        <div className="ornament or6">
          <div className="shine"></div>
        </div>
        <div className="bells-container">
          <div className="bell bell1">
            <div className="bell-top"></div>
            <div className="bell-bottom"></div>
            <div className="bell-mid"></div>
          </div>
          <div className="bell bell2">
            <div className="bell-top"></div>
            <div className="bell-bottom"></div>
            <div className="bell-mid"></div>
          </div>
          <div className="bow">
            <div className="b1"></div>
            <div className="b2"></div>
            <div className="b3"></div>
          </div>
        </div>
      </div>
      <div className="gift"></div>
      <div className="ribbon"></div>
      <div className="gift2"></div>
      <div className="ribbon2"></div>
      <div className="shadow"></div>
    </div>
  );
});
