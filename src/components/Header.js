import React from "react";

const Header = ({ title, subheading, style }) => (
  <div
    className={`header columns is-vertical full-width-image margin-top-0`}
    style={style}
  >
    {title && (
      <div className="title-container has-text-weight-bold is-size-1">
        <h1 className="title is-vertical">{title}</h1>
      </div>
    )}
    {subheading && (
      <div className="title-container has-text-weight-bold is-size-1">
        <h1 className="title">{subheading}</h1>
      </div>
    )}
  </div>
);

export default Header;
