import React from 'react';
import "./container.css";

const Container = ({children}) => {
  return (
    <div className="conatiner">
      {children}
    </div>
  );
};

export default Container;
